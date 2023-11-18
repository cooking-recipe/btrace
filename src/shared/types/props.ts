import type { CSSProperties, HTMLProps, PropsWithChildren } from 'react';
import type { ColorType } from './ColorType';

export type TextLikeComponentProps = PropsWithChildren
  & Pick<HTMLProps<HTMLElement>, 'style' | 'className'>
  & {
    display?: 'block' | 'inline' | 'inherit';
    color?: ColorType | 'inherit';
    size?: number | 'inherit';
    weight?: 400 | 500 | 600 | 700 | 900 | 'inherit';
    fontStyle?: 'italic' | 'normal' | 'inherit';
    /** Значение в процентах */
    lineHeight?: number;
    /** Значение в процентах */
    opacity?: number;
    alignCenter?: boolean;
  };

export type UniversalContainerProps = HTMLProps<HTMLDivElement>
  & Pick<CSSProperties, 'gap' | 'justifyContent' | 'paddingInline'>
  & {
    relative?: boolean;
    stretched?: boolean;
    fitBlank?: boolean;
    fullHeight?: boolean;
    flexMode?: 'row' | 'column';
    safeAreaPadding?: 'top' | 'bottom' | 'block';
    onMounted?: (element: HTMLDivElement) => void;
    onGlobalResize?: (element: HTMLDivElement) => void;
  };