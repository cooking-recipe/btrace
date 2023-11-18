import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { PanelHeader, PanelHeaderButton, type PanelHeaderProps } from '@vkontakte/vkui';
import { Icon28ChevronLeft } from '@vkontakte/icons';

import { TaskStopwatch } from '../TaskStopwatch';

import style from './index.module.scss';

import type { FC } from 'react';

interface Props extends PanelHeaderProps {
  chevronBackground?: boolean;
  timeMode?: 'light' | 'dark';
}

export const SimplePanelHeader: FC<Props> = ({ chevronBackground, timeMode, ...props }) => {
  const navigator = useRouteNavigator();

  const chevronIcon = <Icon28ChevronLeft color='#FFF' />;

  return (
    <PanelHeader
      className={style['panel-header']}
      fixed={false}
      before={
        <>
          <PanelHeaderButton onClick={() => navigator.back()} aria-label='back button'>
            {
              chevronBackground
                ? (
                  <div className={style['panel-header__chevron-plate']}>
                    {chevronIcon}
                  </div>
                )
                : chevronIcon
            }
          </PanelHeaderButton>
          {timeMode && <TaskStopwatch timeMode={timeMode} />}
        </>
      }
      transparent
      {...props}
    />
  );
};