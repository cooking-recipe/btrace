import React, { PropsWithChildren, useEffect, useState } from 'react';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';
import bridge from '@vkontakte/vk-bridge';
import { useInsets } from '@vkontakte/vk-bridge-react';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { ConfigProvider, AdaptivityProvider, AppRoot, useAdaptivity } from '@vkontakte/vkui';
import { loadHTMLElement, promiseWithTimeout } from 'shared/utils';
import { router } from 'shared/vars';

import preloadList from '../../public/assets/preloadList.json';

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAppInit, setIsAppInit] = useState(false);

  const vkBridgeInsets = useInsets() || undefined;
  const vkBridgeAdaptivityProps = useAdaptivity();

  const initApp = async () => {
    setIsAppInit(true);

    await Promise.all(preloadList.map(async (src) => {
      try {
        await loadHTMLElement(src);
      } catch (error) {
        console.log(error);
      }
    }));

    try {
      await promiseWithTimeout(3000, bridge.send('VKWebAppInit'));
    } catch {
      console.log('Приложение инициализировано вне платформы VK');
    }
  };

  useEffect(() => {
    // Проверка всех запрашиваемых ресурсов
    // if (user && episodes && achievements && characters && rating && !isAppInit) {
    if (!isAppInit) {
      initApp();
    }
    // }, [user, episodes, achievements, characters, rating]);
  }, []);

  return (
    <RecoilRoot>
      <ConfigProvider isWebView={bridge.isWebView()} appearance='light'>
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnMount: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
          }}
        >
          <AdaptivityProvider {...vkBridgeAdaptivityProps}>
            <AppRoot safeAreaInsets={vkBridgeInsets}>
              {isAppInit && (
                <RouterProvider router={router}>
                  {children}
                </RouterProvider>
              )}
            </AppRoot>
          </AdaptivityProvider>
        </SWRConfig>
      </ConfigProvider>
    </RecoilRoot>
  );
};