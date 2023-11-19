import React, { CSSProperties } from 'react';
import { decodeHTML } from 'shared/utils';

import type { TextLikeComponentProps } from 'shared/types';

interface TextParentProps extends TextLikeComponentProps {
  htmlTag: 'p' | 'span';
}

export const TextParent: React.FC<TextParentProps> = ({
  htmlTag, display, color, size, weight, fontStyle, lineHeight, alignCenter, opacity, style, className, children
}) => {
  const preparedStyle: CSSProperties = {
    ...style,
    display: display || 'inherit',
    color: color ? `var(--${color})` : 'inherit',
    fontSize: size || 'inherit',
    fontWeight: weight || 'inherit',
    fontStyle: fontStyle || 'normal',
    lineHeight: `${lineHeight}%` || 'inherit',
    textAlign: alignCenter ? 'center' : 'inherit',
    opacity: `${opacity || 100}%`
  };

  if (typeof children === 'string') {
    return React.createElement(htmlTag, {
      style: preparedStyle, className, dangerouslySetInnerHTML: { __html: decodeHTML(children.toString()) }
    });
  }
  return React.createElement(htmlTag, { style: preparedStyle, className }, children);
};