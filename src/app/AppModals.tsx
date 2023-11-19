import { useRecoilValue } from 'recoil';
import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { ModalRoot, usePlatform } from '@vkontakte/vkui';
import { AchievementModal } from 'features/Achivements';
import { onCurrentModalCloseAtom } from 'shared/store';
import { routes } from 'shared/vars';

export const AppModals = () => {
  const onCurrentModalClose = useRecoilValue(onCurrentModalCloseAtom);
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();
  const platform = usePlatform();

  const onClose = () => {
    routeNavigator.back();
    if (onCurrentModalClose) {
      setTimeout(() => onCurrentModalClose());
    }
  };

  return (
    <ModalRoot activeModal={activeModal} onClose={onClose}>
      <AchievementModal
        nav={routes.root.achievements.achievements['achievement-modal'].id}
        height={platform === 'vkcom' ? undefined : 500}
        settlingHeight={100}
        onClose={onClose}
      />
    </ModalRoot>
  );
};