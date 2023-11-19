import { type FC } from 'react';
import { Spacing } from '@vkontakte/vkui';
import { Icon24ChevronRight, Icon24DoneOutline } from '@vkontakte/icons';
import { Text } from 'shared/components/UI';

import style from './index.module.scss';

interface LessonCardProps {
  // TODO: сделать обязательным
  imageURL?: string;
  heading: string;
  subheading: string;
  isPassed: boolean;
}

export const LessonCard: FC<LessonCardProps> = ({ imageURL, heading, subheading, isPassed }) => {
  return (
    <div className={style['lesson-card']} role='button'>
      <div className={style['lesson-card__icon-block']}>
        {/* TODO: icon */}
      </div>
      <div className={style['lesson-card__text-block']}>
        <Text size={17} weight={500}>{heading}</Text>
        <Spacing size={2} />
        <Text size={15} weight={400} opacity={66}>{subheading}</Text>
      </div>
      <div className={style['lesson-card__status-icon']}>
        {isPassed ? <Icon24DoneOutline color='#4bb34b' /> : <Icon24ChevronRight color='#b8c1cc' />}
      </div>
    </div>
  );
};