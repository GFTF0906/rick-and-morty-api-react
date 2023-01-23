import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Characters } from './components/Characters/';
import { ApiResponse } from './types/ApiResponseType';

const fetchAllApiCharacters = async () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const { info, results }: ApiResponse = await axios
    .get(url)
    .then((response) => response.data);

  return { info, results };
};

export const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['Fetch All Api Characters'],
    queryFn: fetchAllApiCharacters,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error on fetching data.</h2>;

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <h3>Total: {data.info.count}</h3>
      <h3>Pages: {data.info.pages}</h3>

      <Characters {...data} />
    </div>
  );
};
