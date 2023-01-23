import { TCharacter } from './CharacterType';
import { TInfo } from './InfoType';

export type ApiResponse = {
  info: TInfo;
  results: TCharacter[];
};
