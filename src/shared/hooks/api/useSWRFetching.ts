/* eslint-disable default-param-last */
import useSWR, { BareFetcher } from 'swr';

import type { PublicConfiguration } from 'swr/_internal';

export const useSWRFetching = <T>(
  key: string,
  fetcher: BareFetcher<T>,
  isReady: boolean = true,
  config?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>
) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<T>(isReady ? key : null, fetcher, config);

  return { data, error, isLoading, isValidating, mutate };
};