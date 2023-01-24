import { Characters } from '../components/Characters/';

import { ApiResponse } from '../types/ApiResponseType';
import { TCharacter } from '../types/CharacterType';
import { useFetchData } from '../hooks/useFetchData';

export const CharactersPage = () => {
  const { data, isLoading, isError } = useFetchData<ApiResponse<TCharacter[]>>(
    'https://rickandmortyapi.com/api/character'
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      {data && <Characters results={data?.results} />}
    </section>
  );
};
