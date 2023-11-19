import { FC } from 'react';

import style from './index.module.scss';

interface AchievementImageProps {
  imageURL: string;
}

export const AchievementImage: FC<AchievementImageProps> = ({ imageURL }) => {
  return (
    <div className={style['icon-block']}>
      <img className={style['icon-block__plate']} src='assets/images/achievements/plate.svg' alt="" />
      <img className={style['icon-block__icon']} src={imageURL} alt="achievement image" />
    </div>
  );
};