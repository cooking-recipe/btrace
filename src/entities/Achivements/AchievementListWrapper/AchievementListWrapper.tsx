import { FC, PropsWithChildren } from 'react';

import style from './index.module.scss';

export const AchievementListWrapper: FC<PropsWithChildren> = (props) => {
  return (
    <div {...props} className={style['achievement-list']} />
  );
};