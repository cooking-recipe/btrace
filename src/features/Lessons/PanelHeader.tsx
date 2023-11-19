import { Spacing } from '@vkontakte/vkui';
import { FractedProgressBar } from 'entities/Lessons';
import React from 'react';
import { SimplePanelHeader } from 'shared/components';
import { Text } from 'shared/components/UI';

export const PanelHeader = () => {
  return (
    <SimplePanelHeader before='keys' >
      <Text color='white' size={20} weight={600} lineHeight={130}>
        Уроки от&nbsp;Btrace
      </Text>
      <Spacing size={8} />
      <Text color='white' size={15} weight={400} lineHeight={130} opacity={66}>
        О&nbsp;криптовалюте, и&nbsp;почему это актуально
      </Text>
      <Spacing size={12} />
      <FractedProgressBar value={1} max={10} />
      <Spacing size={8} />
      <Text color='white' size={13} weight={400} lineHeight={130} opacity={66}>
        1 из 10 уроков пройдено
      </Text>
    </SimplePanelHeader>
  );
};