import { Dispatch, SetStateAction } from 'react';
import { ApiResponse } from '../../types/ApiResponseType';
import { AppTypes } from '../../types/UnionAppTypes';
import { ArrowLeft, ArrowRight } from '../svgs';

export function PaginationButtons<
  T extends {
    data: ApiResponse<AppTypes>;
    setCurrentPageId: Dispatch<SetStateAction<number>>;
  }
>({ data, setCurrentPageId }: T) {
  return (
    <section className="absolute right-60 top-40 flex items-center gap-2">
      {data?.info?.prev && (
        <div
          onClick={() => setCurrentPageId((prevState) => prevState - 1)}
          className="cursor-pointer"
        >
          <ArrowLeft />
        </div>
      )}
      {data?.info?.next && (
        <div
          onClick={() => setCurrentPageId((prevState) => prevState + 1)}
          className="cursor-pointer"
        >
          <ArrowRight />
        </div>
      )}
    </section>
  );
}
