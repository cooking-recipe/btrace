import { Spacing } from '@vkontakte/vkui';
import React from 'react';
import { SimplePanelHeader } from 'shared/components';
import { Text } from 'shared/components/UI';

export const PanelHeader = () => {
  return (
    <SimplePanelHeader before='keys' >
      <Text color='white' size={20} weight={600} lineHeight={130}>
        Награды Btrace
      </Text>
      <Spacing size={8} />
      <Text color='white' size={15} weight={500} lineHeight={130} opacity={66}>
        Проверяй адреса разных типов, из&nbsp;разных блокчейнов. За&nbsp;проверки ты&nbsp;будешь получать наши ачивки.
      </Text>
    </SimplePanelHeader>
  );
};