import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../utils/fetchData';

export const useFetchData = <T>(url: string) => {
  const { data, isLoading, isError } = useQuery<T>(['Fetch All API Characters'], () => fetchData<T>(url),
  );

  return { data, isLoading, isError };
};
