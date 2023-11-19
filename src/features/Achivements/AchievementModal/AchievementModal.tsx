import { type FC } from 'react';
import { Button, ModalPage, ModalPageHeader, ModalPageProps, Spacing } from '@vkontakte/vkui';
import { Icon24ShareOutline } from '@vkontakte/icons';
import { AchievementImage } from 'entities/Achivements';
import { Text } from 'shared/components/UI';
import { useIdParam } from 'shared/hooks';
import { achievements } from 'shared/vars';
import { useInsets } from '@vkontakte/vk-bridge-react';

import style from './index.module.scss';

export const AchievementModal: FC<ModalPageProps> = (props) => {
  const insets = useInsets();
  const index = useIdParam();

  return (
    <ModalPage {...props} header={<ModalPageHeader transparent />}>
      <div className={style['achievement-modal']}>
        <Text size={20} weight={600}>{achievements[index.current].name}</Text>
        <Spacing size={8} />
        <Text size={15} weight={400} opacity={66}>{achievements[index.current].description}</Text>
        <Spacing size={20} />
        <hr className={style['achievement-modal__progress-line']} />
        <Spacing size={12} />
        <Text size={13} weight={400} opacity={66}>
          Проверено 0 из&nbsp;{achievements[index.current].max} адресов
        </Text>
        <Spacing size={32} />
        <AchievementImage imageURL={`assets/images/achievements/${index.current}.svg`} />
        <Spacing size={20} />
        <Text size={13} weight={400} opacity={66}>Получили 10К человек</Text>
        <Spacing size={36} />
        <Button size='l' before={<Icon24ShareOutline />} disabled stretched>
          Поделиться
        </Button>
      </div>
      <Spacing size={insets?.bottom} />
    </ModalPage>
  );
};