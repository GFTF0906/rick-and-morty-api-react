import { TCharacter } from '../../types/CharacterType';

export const Character = ({
  episode,
  gender,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  url,
}: TCharacter) => {
  return (
    <div>
      <img src={image} alt={`${name} Image`} />
      <h3>Name: {name}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Location: {location.name}</h3>
      <h3>Origin: {origin.name}</h3>
      <h3>Specie: {species}</h3>
      <h3>Status: {status}</h3>
      <h3>Type: {type}</h3>
    </div>
  );
};
