import { Characters } from '../components/Characters/';

import { ApiResponse } from '../types/ApiResponseType';
import { TCharacter } from '../types/CharacterType';
import { useFetchData } from '../hooks/useFetchData';
import { useState } from 'react';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

export const CharactersPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/character?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TCharacter[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      {data && (
        <>
          <Characters results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
