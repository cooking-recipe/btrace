import {
  RoutesConfig, createView, createPanel, createRoot, createHashRouter, createModal
} from '@vkontakte/vk-mini-apps-router';

export const routes = RoutesConfig.create([
  createRoot('root', [
    createView('check', [
      createPanel('main', '/'),
      createPanel('report', '/report')
    ]),
    createView('payment', [
      createPanel('payment', '/payment')
    ]),
    createView('achievements', [
      createPanel('achievements', '/achievements', [
        createModal('achievement-modal', '/achievements/:id', ['id'] as const)
      ])
    ]),
    createView('referal', [
      createPanel('referal', '/referal')
    ]),
    createView('lessons', [
      createPanel('lessonsList', '/lessons'),
      createPanel('lessonId', '/lessons/:id')
    ])
  ])
]);

export enum modalRoutes {
  example = 'example',
}

export const router = createHashRouter(routes.getRoutes());