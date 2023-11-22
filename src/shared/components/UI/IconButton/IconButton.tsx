import { Icon24CopyOutline } from '@vkontakte/icons';

import style from './index.module.scss';

import type { FC, ButtonHTMLAttributes } from 'react';

const COLOR = '#000';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'copy';
}

export const IconButton: FC<IconButtonProps> = (({ icon, ...props }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'copy':
        return <Icon24CopyOutline color={COLOR} />;
      default:
        return <></>;
    }
  };

  return (
    <button {...props} className={style['icon-button']}>{renderIcon()}</button>
  );
});