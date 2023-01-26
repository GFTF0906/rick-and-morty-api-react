import { useParams } from 'react-router-dom';

import { TCharacter } from '../types/CharacterType';

import { Character } from '../components/Characters/Character';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';

import { ButtonGoBack } from '../components/Navigation/ButtonGoBack';
import { useFetchData } from '../hooks/useFetchData';

export const CharacterPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetchData<TCharacter>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="flex items-center justify-center flex-col px-60 text-gray-900">
      <ButtonGoBack />
      {data && <Character {...data} className="w-full" imageStyles="w-full" />}
    </section>
  );
};
