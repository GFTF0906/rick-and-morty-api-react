import { useFetchData } from '../hooks/useFetchData';
import { ApiResponse } from '../types/ApiResponseType';
import { TLocation } from '../types/LocationType';

export const LocationsPage = () => {
  const { data, isLoading, isError } = useFetchData<ApiResponse<TLocation[]>>(
    'https://rickandmortyapi.com/api/location'
  );

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error on fetching data.</h2>;

  return (
    <main className="w-full flex justify-center items-center flex-col gap-12">
      <pre>{JSON.stringify(data?.results, null, 2)}</pre>
    </main>
  );
};
