import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../utils/fetchData';

export const useFetchData = <T>(url: string, currentPageID: number) => {
  const { data, isLoading, isError } = useQuery<T>(
    ['Fetch All API Characters', currentPageID],
    () => fetchData<T>(url),
    {
      keepPreviousData: true,
    }
  );

  return { data, isLoading, isError };
};
