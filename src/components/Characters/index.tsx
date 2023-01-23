import { TCharacter } from '../../types/CharacterType';
import { Character } from './Character';

type CharactersProps = {
  results: TCharacter[];
};

export const Characters = ({ results: characters }: CharactersProps) => {
  if (!characters) return <></>;

  return (
    <section className="flex flex-col px-8 gap-4 text-gray-900 sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:px-80">
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </section>
  );
};
