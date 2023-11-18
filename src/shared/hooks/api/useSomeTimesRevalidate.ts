import { swrKeys } from 'shared/vars';

import { useSWRFetching } from './useSWRFetching';

export const useSomeTimesRevalidate = (isReady: boolean = true) => {
  const { data: rating, ...returned } = useSWRFetching(
    swrKeys.example,
    () => null,
    isReady,
    { revalidateOnMount: true, revalidateOnReconnect: true }
  );

  return { rating, ...returned };
};