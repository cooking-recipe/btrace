import { type FC } from 'react';
import { Spacing, type PanelProps, Panel } from '@vkontakte/vkui';
import { PanelHeader } from 'features/Referal';
import { PanelContent } from 'shared/components';
import { Text } from 'shared/components/UI';

export const Lessons: FC<PanelProps> = () => {
  return (
    <Panel>
      <PanelHeader />
      <PanelContent>
        <Text size={17} weight={600}>
          Статистика рефералов
        </Text>
        <Spacing size={16} />
        {/* <ReferalStats /> */}
        <Spacing size={20} />
        {/* <ReferalFAQ /> */}
      </PanelContent>
    </Panel>
  );
};