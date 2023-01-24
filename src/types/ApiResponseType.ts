import { TInfo } from './InfoType';

export type ApiResponse<T> = {
  info: TInfo;
  results: T;
};
