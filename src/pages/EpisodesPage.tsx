import { Characters } from '../components/Characters/';

import { ApiResponse } from '../types/ApiResponseType';
import { useFetchData } from '../hooks/useFetchData';
import { TEpisode } from '../types/EpisodeType';
import { Episodes } from '../components/Episodes';

export const EpisodesPage = () => {
  const { data, isLoading, isError } = useFetchData<ApiResponse<TEpisode[]>>(
    'https://rickandmortyapi.com/api/episode'
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      {data && <Episodes results={data?.results} />}
    </section>
  );
};
