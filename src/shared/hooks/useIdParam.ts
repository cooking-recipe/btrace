import { useRef } from 'react';
import { useParams } from '@vkontakte/vk-mini-apps-router';

export const useIdParam = () => {
  const params = useParams();
  const id = useRef(Number(params?.id) || 0);

  return id;
};