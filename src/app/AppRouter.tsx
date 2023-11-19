import { Root, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Achivements, Lessons } from 'panels';
import { routes } from 'shared/vars';

import { AppModals } from './AppModals';

export const AppRouter = () => {
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  return (
    <SplitLayout modal={<AppModals />}>
      <SplitCol>
        <Root activeView={activeView || routes.root.check.id}>
          {/* <View nav={routes.root.check.id} activePanel={activePanel || routes.root.check.main.id}>
            <Onboarding nav={routes.root.check.main.id} />
          </View> */}
          <View nav={routes.root.achievements.id} activePanel={activePanel || routes.root.achievements.achievements.id}>
            <Achivements nav={routes.root.achievements.achievements.id} />
          </View>
          <View nav={routes.root.lessons.id} activePanel={activePanel || routes.root.lessons.lessonsList.id}>
            <Lessons nav={routes.root.lessons.lessonsList.id} />
          </View>
        </Root>
      </SplitCol>
    </SplitLayout>
  );
};