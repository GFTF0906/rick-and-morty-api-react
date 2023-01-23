import { TCharacter } from '../../types/CharacterType';
import { Subheading } from '../Headings/Subheading';
import { Title } from '../Headings/Title';

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
    <div className="w-full rounded bg-[#d9d0d0]">
      <img src={image} alt={`${name} Image`} className="w-full rounded-t" />

      <div className="p-6">
        <Title text={name} className={'text-2xl font-bold'} />
        <hr className="border-1 border-gray-900 pb-5" />

        <div className="grid grid-cols-2 sm:flex sm:flex-col">
          <Subheading text="Status" className="bold-subheading" />
          <Subheading text={`${status} ${type ? ` | ${type}` : ''}`} />
          <Subheading text="Gender" className="bold-subheading" />
          <Subheading text={gender} />
          <Subheading text="Location" className="bold-subheading" />
          <Subheading text={location.name} />
          <Subheading text="Origin" className="bold-subheading" />
          <Subheading text={origin.name} />
          <Subheading text="Species" className="bold-subheading" />
          <Subheading text={species} />
        </div>
      </div>
    </div>
  );
};
