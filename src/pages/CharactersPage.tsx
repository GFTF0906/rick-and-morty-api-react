import { Characters } from '../components/Characters/';

import { fetchData } from '../utils/fetchData';

import { ApiResponse } from '../types/ApiResponseType';
import { TCharacter } from '../types/CharacterType';
import { useFetchData } from '../hooks/useFetchData';

export const CharactersPage = () => {
  const { data } = useFetchData<ApiResponse<TCharacter[]>>(
    'https://rickandmortyapi.com/api/character'
  );

  return (
    <main className="w-full flex justify-center items-center flex-col gap-12">
      {data && <Characters results={data?.results} />}
    </main>
  );
};
