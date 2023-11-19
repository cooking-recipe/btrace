import { type FC } from 'react';
import { Spacing, type PanelProps, Panel } from '@vkontakte/vkui';
import { LessonCard, PanelHeader } from 'features/Lessons';
import { PanelContent } from 'shared/components';
import { Text } from 'shared/components/UI';

export const Lessons: FC<PanelProps> = () => {
  return (
    <Panel>
      <PanelHeader />
      <PanelContent>
        <Text size={17} weight={600}>
          Обучение криптовалюте
        </Text>
        <Spacing size={16} />
        <LessonCard heading='Что такое блокчейн' subheading='1 урок' isPassed />
      </PanelContent>
    </Panel>
  );
};