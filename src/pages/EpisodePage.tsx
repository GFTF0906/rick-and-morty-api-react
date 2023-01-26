import { useParams } from 'react-router-dom';

import { Episode } from '../components/Episodes/Episode';
import { useFetchData } from '../hooks/useFetchData';
import { TEpisode } from '../types/EpisodeType';

export const EpisodePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TEpisode>(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="flex items-center justify-center flex-col px-60 text-gray-900">
      {data && <Episode {...data} />}
    </section>
  );
};
