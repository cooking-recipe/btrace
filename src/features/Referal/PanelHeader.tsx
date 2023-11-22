import { Spacing } from '@vkontakte/vkui';
import { SimplePanelHeader } from 'shared/components';
import { Text } from 'shared/components/UI';

import { CopiedField } from './CopiedField';

export const PanelHeader = () => {
  return (
    <SimplePanelHeader before='keys' >
      <Text color='white' size={20} weight={600} lineHeight={130}>
        Реферальная программа&nbsp;&mdash; кэшбэк USDT сразу на&nbsp;ваш криптоадрес!
      </Text>
      <Spacing size={20} />
      <CopiedField fieldValue='Btrace_referal_link#1' />
      <Spacing size={16} />
      <Text color='white' size={13} weight={400} opacity={66}>
        Возникли вопросы? Напишите <a href="#">нам в&nbsp;поддержку</a>.
      </Text>
    </SimplePanelHeader>
  );
};