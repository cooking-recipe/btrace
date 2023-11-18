import { type FC } from 'react';
import { Button, ModalCard, ModalCardProps } from '@vkontakte/vkui';
import { Icon56CheckCircleOutline } from '@vkontakte/icons';

export const ExampleModalCard: FC<ModalCardProps> = (props) => {
  return (
    <ModalCard
      {...props}
      icon={<Icon56CheckCircleOutline color='#2ECC71' />}
      header='Правильно!'
      subheader={<>Переходите к&nbsp;следующему заданию</>}
      actions={
        <Button mode='primary' size='l' stretched onClick={props.onClose}>
          Далее
        </Button>
      }
    />
  );
};