import { useRecoilValue } from 'recoil';
import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { ModalRoot } from '@vkontakte/vkui';
import { ExampleModalCard } from 'shared/components';
import { onCurrentModalCloseAtom } from 'shared/store';
import { modalRoutes } from 'shared/vars';

export const AppModals = () => {
  const onCurrentModalClose = useRecoilValue(onCurrentModalCloseAtom);
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();

  const onClose = () => {
    routeNavigator.hideModal();
    if (onCurrentModalClose) {
      setTimeout(() => onCurrentModalClose());
    }
  };

  return (
    <ModalRoot activeModal={activeModal} onClose={onClose}>
      <ExampleModalCard nav={modalRoutes.example} onClose={onClose} />
    </ModalRoot>
  );
};