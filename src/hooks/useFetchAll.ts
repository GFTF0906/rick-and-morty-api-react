import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { ApiResponse } from '../types/ApiResponseType';

const fetchAllApiCharacters = async () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const { results, info }: ApiResponse = await axios
    .get<ApiResponse>(url)
    .then((response) => response.data);

  return { results, info };
};

export const useFetchAll = () => {
  const { data, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ['Fetch All API Characters'],
    queryFn: () => fetchAllApiCharacters(),
  });

  return { data, isLoading, isError };
};
