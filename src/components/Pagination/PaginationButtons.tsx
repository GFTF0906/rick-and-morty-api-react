import { Dispatch, SetStateAction } from 'react';
import { ApiResponse } from '../../types/ApiResponseType';
import { TCharacter } from '../../types/CharacterType';
import { TEpisode } from '../../types/EpisodeType';
import { TLocation } from '../../types/LocationType';

export function PaginationButtons<
  T extends {
    data: ApiResponse<TCharacter[] | TEpisode[] | TLocation[]>;
    setCurrentPageId: Dispatch<SetStateAction<number>>;
  }
>({ data, setCurrentPageId }: T) {
  return (
    <div>
      {data?.info?.prev && (
        <button onClick={() => setCurrentPageId((prevState) => prevState - 1)}>
          PREV
        </button>
      )}
      {data?.info?.next && (
        <button onClick={() => setCurrentPageId((prevState) => prevState + 1)}>
          NEXT
        </button>
      )}
    </div>
  );
}
