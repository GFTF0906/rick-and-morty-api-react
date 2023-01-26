import { useParams } from 'react-router-dom';

import { Episode } from '../components/Episodes/Episode';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { ButtonGoBack } from '../components/Navigation/ButtonGoBack';

import { useFetchData } from '../hooks/useFetchData';
import { TEpisode } from '../types/EpisodeType';

export const EpisodePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TEpisode>(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="flex items-center justify-center flex-col px-60 text-gray-900">
      <ButtonGoBack />
      {data && <Episode {...data} />}
    </section>
  );
};
