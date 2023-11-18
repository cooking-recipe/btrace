/* eslint-disable max-len */
import { type FC } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Panel, PanelHeader, Spacing, type PanelProps, Avatar, Button } from '@vkontakte/vkui';
import { FixedBottomArea, GreetingText, OnboardingCard } from 'entities/Onboarding';
import { Div, IconLogo, Text } from 'shared/components/UI';
import { passOnboarding } from 'shared/api';
import { routes } from 'shared/vars';
import { useUser } from 'shared/hooks';

export const AchivementsPanel: FC<PanelProps> = () => {
  const { user } = useUser();
  const navigator = useRouteNavigator();

  if (!user) {
    return null;
  }

  const onNextButtonClick = () => {
    if (!user.onboardingPassed) {
      passOnboarding();
    }

    navigator.push(routes.root.home.menu.path);
  };

  return (
    <Panel>
      <PanelHeader before={<Div inlineInsets={16}><IconLogo /></Div>} fixed />
      <Spacing size={40} />
      <Div inlineInsets={16}>
        <Avatar size={84} withBorder src={user.photo} />
        <Spacing size={12} />
        <GreetingText name={user.firstName} />
        <Spacing size={8} />
        <Text size={18} weight={400} lineHeight={140}>
          Добро пожаловать в&nbsp;игру &laquo;Короче, ЕВРАЗ: The Game&raquo; по&nbsp;мотивам одноименного сериала.
          Здесь вы&nbsp;сможете ближе познакомиться с&nbsp;героями и&nbsp;посмотреть <a style={{ color: 'inherit' }} href="https://vk.com/video/playlist/-171346861_9" target='_blank'>сериал&nbsp;по&nbsp;ссылке</a>
        </Text>
        <Spacing size={42} />
        <OnboardingCard number={1}>
          Смотрите сериал, выполняйте простые задания для каждой из&nbsp;семи серий
        </OnboardingCard>
        <Spacing size={8} />
        <OnboardingCard number={2}>
          Коллекционируйте персонажей, копите баллы и&nbsp;получайте классные подарки от&nbsp;компании
        </OnboardingCard>
        <Spacing size={42} />
      </Div>
      <FixedBottomArea>
        <Div inlineInsets={16}>
          <Button size='l' stretched onClick={onNextButtonClick}>Далее</Button>
          <Spacing size={10} />
          <Text size={12} weight={400} lineHeight={130} opacity={50} alignCenter>
            Продолжая игру вы&nbsp;соглашаетесь с&nbsp;
            <a style={{ color: 'inherit' }} href='https://vkma-evraz-koroche-frontend-production.trendsurfers.ru/assets/documents/rules.pdf' target='_blank'>
              Правилами&nbsp;конкурса
            </a> и&nbsp;подтверждаете,
            что вы&nbsp;старше 18&nbsp;лет.
          </Text>
        </Div>
      </FixedBottomArea>
    </Panel>
  );
};