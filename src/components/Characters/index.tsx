import { ApiResponse } from '../../types/ApiResponseType';
import { Character } from './Character';

export const Characters = ({ results: characters }: ApiResponse) => {
  if (!characters) return <></>;

  return (
    <section>
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </section>
  );
};
