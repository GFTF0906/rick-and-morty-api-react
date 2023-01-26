import { useState } from 'react';

import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Locations } from '../components/Locations/';
import { PaginationButtons } from '../components/Pagination/PaginationButtons';

import { useFetchData } from '../hooks/useFetchData';

import { ApiResponse } from '../types/ApiResponseType';
import { TLocation } from '../types/LocationType';

export const LocationsPage = () => {
  const [currentPageID, setCurrentPageID] = useState<number>(1);

  const url = `https://rickandmortyapi.com/api/location?page=${currentPageID}`;
  const { data, isLoading, isError } = useFetchData<ApiResponse<TLocation[]>>(
    url,
    currentPageID
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="w-full flex justify-center items-center flex-col p-4 gap-8">
      {data && (
        <>
          <Locations results={data?.results} />
          <PaginationButtons data={data} setCurrentPageId={setCurrentPageID} />
        </>
      )}
    </section>
  );
};
