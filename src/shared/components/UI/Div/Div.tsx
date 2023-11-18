import { useRef, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import { useInsets } from '@vkontakte/vk-bridge-react';
import { Spacing } from '@vkontakte/vkui';

import style from './index.module.scss';

import type { UniversalContainerProps } from 'shared/types';

export const Div = forwardRef<HTMLDivElement, UniversalContainerProps>(({
  relative, stretched, fitBlank, fullHeight, flexMode, safeAreaPadding, gap, justifyContent, paddingInline,
  style: inlineStyles, className, children, onMounted, onGlobalResize, ...props
}, propRef) => {
  const ref = useRef<HTMLDivElement>(null);
  const insets = useInsets();

  const onResize = () => {
    if (ref.current && onGlobalResize) {
      onGlobalResize(ref.current);
    }
  };

  useEffect(() => {
    if (ref.current && onMounted) {
      onMounted(ref.current);
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      {...props}
      className={classNames(style.div, {
        [style['div--relative']]: relative,
        [style['div--stretched']]: stretched,
        [style['div--fit-blank']]: fitBlank,
        [style['div--full-height']]: fullHeight,
        [style['div--flex']]: flexMode,
        [style[`div--flex--${flexMode}`]]: flexMode
      }, className)}
      style={{ paddingInline, gap, justifyContent, ...inlineStyles }}
      ref={propRef || ref}
    >
      {['top', 'block'].includes(safeAreaPadding || '') && <Spacing size={insets?.top} />}
      {children}
      {['bottom', 'block'].includes(safeAreaPadding || '') && <Spacing size={insets?.bottom} />}
    </div>
  );
});