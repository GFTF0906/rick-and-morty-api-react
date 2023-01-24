import { useFetchData } from '../hooks/useFetchData';
import { ApiResponse } from '../types/ApiResponseType';
import { TLocation } from '../types/LocationType';
import { Locations } from '../components/Locations/';
import { useState } from 'react';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

export const LocationsPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/episode?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TLocation[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error on fetching data.</h2>;

  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      {data && (
        <>
          <Locations results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
