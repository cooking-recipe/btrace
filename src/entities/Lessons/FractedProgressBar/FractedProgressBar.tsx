import { FC } from 'react';
import classNames from 'classnames';

import style from './index.module.scss';

interface Props {
  value: number;
  max: number;
}

export const FractedProgressBar: FC<Props> = ({ value, max }) => {
  const renderFractions = () => {
    const fractions = [];
    for (let index = 1; index <= max; index++) {
      fractions.push(
        <hr
          className={classNames(style['progress-bar__fraction'], {
            [style['progress-bar__fraction__passed']]: value >= index
          })}
          key={`progress-bar-fraction-${index}`}
        />
      );
    }
    return fractions;
  };

  return (
    <div className={style['progress-bar']}>
      {renderFractions()}
    </div>
  );
};