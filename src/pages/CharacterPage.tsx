import { useParams } from 'react-router-dom';

import { TCharacter } from '../types/CharacterType';

import { useFetchData } from '../hooks/useFetchData';
import { Character } from '../components/Characters/Character';

export const CharacterPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TCharacter>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error on fetching data.</h3>;

  return (
    <section className="px-60 text-gray-900">
      {data && <Character {...data} />}
    </section>
  );
};
