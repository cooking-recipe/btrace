import { swrKeys } from 'shared/vars';

import { useSWRFetching } from './useSWRFetching';

export const useNeverRevalidate = (isReady: boolean = true) => {
  const { data: episodes, ...returned } = useSWRFetching(swrKeys.example, () => null, isReady);

  return { episodes, ...returned };
};