import { type FC } from 'react';
import { IconButton, Input } from 'shared/components/UI';

import style from './index.module.scss';

interface CopiedFieldProps {
  fieldValue?: string;
}

export const CopiedField: FC<CopiedFieldProps> = ({ fieldValue }) => {
  const onClick = () => {
    if (fieldValue) {
      window.navigator.clipboard.writeText(fieldValue)
        .catch(() => console.error('Failed copy clipboard'));
    }
  };

  return (
    <div className={style['copied-field']}>
      <Input value={fieldValue} disabled />
      <IconButton icon='copy' onClick={onClick} />
    </div>
  );
};