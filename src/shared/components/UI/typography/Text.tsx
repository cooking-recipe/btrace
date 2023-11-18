import React from 'react';

import { TextParent } from './TextParent';

import type { TextLikeComponentProps } from 'shared/types';

export const Text: React.FC<TextLikeComponentProps> = (props) => {
  return (
    <TextParent {...props} htmlTag='p' />
  );
};