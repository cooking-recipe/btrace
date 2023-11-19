import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { PanelHeaderBack, Spacing } from '@vkontakte/vkui';
import { Icon20KeyOutline } from '@vkontakte/icons';
import { useInsets } from '@vkontakte/vk-bridge-react';

import { IconLogo, Text } from '../UI';

import style from './index.module.scss';

import type { FC, PropsWithChildren } from 'react';
import type { PanelHeaderProps } from 'shared/types';

export const SimplePanelHeader: FC<PanelHeaderProps & PropsWithChildren> = ({ before, keysAmount, children }) => {
  const navigator = useRouteNavigator();
  const insets = useInsets();

  return (
    <div className={style['panel-header']}>
      <Spacing size={insets?.top} />
      <div className={style['panel-header__top-container']}>
        <div className={style['panel-header__before']}>
          {before === 'chevron'
            ? <PanelHeaderBack onClick={() => navigator.back()} />
            : (
              <div className={style['panel-header__keys']}>
                <div className={style['keys__icon-block']}>
                  <Icon20KeyOutline color='#FFF' className={style.keys__icon} />
                </div>
                <div className={style['keys__text-block']}>
                <Text color='orange-gradient' size={15} weight={600} alignCenter>
                  {keysAmount || 0}
                </Text>
                </div>
              </div>
            )
          }
        </div>
        <IconLogo />
      </div>
      <Spacing size={28} />
      <div className={style['panel-header__bottom-container']}>
        {children}
      </div>
    </div>
  );
};