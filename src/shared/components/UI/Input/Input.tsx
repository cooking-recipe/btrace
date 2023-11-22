import { forwardRef, type HTMLProps } from 'react';

import style from './index.module.scss';

export const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>((props, propRef) => {
  return (
    <input {...props} className={style.input} type="text" ref={propRef} />
  );
});