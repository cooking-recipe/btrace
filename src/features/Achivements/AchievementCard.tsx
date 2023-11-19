import { FC } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Spacing } from '@vkontakte/vkui';
import { Text } from 'shared/components/UI';
import { AchievementImage } from 'entities/Achivements';
import { routes } from 'shared/vars';

interface AchievementCardProps {
  index: number;
  name: string;
  description: string;
}

export const AchievementCard: FC<AchievementCardProps> = ({ index, name, description }) => {
  const navigator = useRouteNavigator();

  const onClick = () => navigator.push(`${routes.root.achievements.achievements.path}/${index}`);

  return (
    <div style={{ cursor: 'pointer' }} role='button' onClick={onClick}>
      <AchievementImage imageURL={`assets/images/achievements/${index}.svg`} />
      <Spacing size={12} />
      <Text size={15} weight={400} lineHeight={133} alignCenter>{name}</Text>
      <Spacing size={2} />
      <Text size={13} weight={400} lineHeight={123} opacity={66} alignCenter>{description}</Text>
    </div>
  );
};