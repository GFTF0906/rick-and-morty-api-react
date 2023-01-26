import { useState } from 'react';
import { Episodes } from '../components/Episodes';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

import { useFetchData } from '../hooks/useFetchData';

import { ApiResponse } from '../types/ApiResponseType';
import { TEpisode } from '../types/EpisodeType';

export const EpisodesPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/episode?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TEpisode[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="w-full flex justify-center items-center flex-col p-4 gap-8">
      {data && (
        <>
          <Episodes results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
