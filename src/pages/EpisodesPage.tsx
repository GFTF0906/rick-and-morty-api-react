import { ApiResponse } from '../types/ApiResponseType';
import { useFetchData } from '../hooks/useFetchData';
import { TEpisode } from '../types/EpisodeType';
import { Episodes } from '../components/Episodes';
import { useState } from 'react';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

export const EpisodesPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/episode?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TEpisode[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      {data && (
        <>
          <Episodes results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
