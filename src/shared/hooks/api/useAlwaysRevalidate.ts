import { swrKeys } from 'shared/vars';

import { useSWRFetching } from './useSWRFetching';

export const useAlwaysRevalidate = (isReady: boolean = true) => {
  const { data: user, ...returned } = useSWRFetching(
    swrKeys.example,
    () => null,
    isReady,
    { revalidateIfStale: true, revalidateOnMount: true, revalidateOnFocus: true, revalidateOnReconnect: true }
  );

  return { user, ...returned };
};