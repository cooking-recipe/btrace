import { type FC } from 'react';
import { Spacing, type PanelProps, Panel } from '@vkontakte/vkui';
import { AchievementCard, PanelHeader } from 'features/Achivements';
import { AchievementListWrapper } from 'entities/Achivements';
import { PanelContent } from 'shared/components';
import { Text } from 'shared/components/UI';
import { achievements } from 'shared/vars';

export const Achivements: FC<PanelProps> = () => {
  return (
    <Panel>
      <PanelHeader />
      <PanelContent>
        <Text size={17} weight={600}>Мои достижения</Text>
        <Spacing size={16} />
        <AchievementListWrapper>
          {achievements.map(({ name, description }, index) => (
            <AchievementCard index={index} name={name} description={description} key={`achievement-card-${index}`} />
          ))}
        </AchievementListWrapper>
      </PanelContent>
    </Panel>
  );
};