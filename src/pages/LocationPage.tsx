import { useParams } from 'react-router-dom';

import { Location } from '../components/Locations/Location';

import { useFetchData } from '../hooks/useFetchData';
import { TLocation } from '../types/LocationType';

export const LocationPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TLocation>(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="flex items-center justify-center flex-col px-60 text-gray-900">
      {data && <Location {...data} />}
    </section>
  );
};
