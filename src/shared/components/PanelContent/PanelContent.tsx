import { forwardRef } from 'react';

import { Div } from '../UI/Div';

import style from './index.module.scss';

import type { UniversalContainerProps } from 'shared/types';

export const PanelContent = forwardRef<HTMLDivElement, UniversalContainerProps>((props, propRef) => {
  return (
    <Div {...props} className={style['panel-content']} fitBlank ref={propRef} />
  );
});