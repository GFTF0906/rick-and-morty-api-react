import { useParams } from 'react-router-dom';

import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Location } from '../components/Locations/Location';
import { ButtonGoBack } from '../components/Navigation/ButtonGoBack';

import { useFetchData } from '../hooks/useFetchData';
import { TLocation } from '../types/LocationType';

export const LocationPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TLocation>(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="flex items-center justify-center flex-col self-center px-60 text-gray-900">
      <ButtonGoBack />
      {data && <Location {...data} />}
    </section>
  );
};
