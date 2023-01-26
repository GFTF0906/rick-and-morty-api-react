import { useState } from 'react';

import { Characters } from '../components/Characters';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

import { useFetchData } from '../hooks/useFetchData';

import { ApiResponse } from '../types/ApiResponseType';
import { TCharacter } from '../types/CharacterType';

export const CharactersPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/character?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TCharacter[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="w-full flex justify-center items-center flex-col p-4 gap-8">
      {data && (
        <>
          <Characters results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
