import { Link } from 'react-router-dom';
import { TCharacter } from '../../types/CharacterType';
import { Subheading } from '../Headings/Subheading';
import { Title } from '../Headings/Title';
import { HorizontalRow } from '../Rows/HorizontalRow';

export const Character = ({
  id,
  episode,
  gender,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  className,
  imageStyles,
}: TCharacter) => {
  return (
    <div className={'bg-gray-200 ' + className ?? ''}>
      <img
        src={image}
        alt={`${name} Image`}
        className={'rounded-t ' + imageStyles ?? ''}
      />

      <div className="p-6">
        <Link to={`/characters/${id}`}>
          <Title
            text={name}
            className={'text-2xl font-bold hover:text-gray-600'}
          />
        </Link>
        <HorizontalRow />

        <div className="grid grid-cols-2 sm:flex sm:flex-col">
          <Subheading text="Status" className="bold-subheading" />
          <Subheading text={`${status} ${type ? ` | ${type}` : ''}`} />

          <Subheading text="Gender" className="bold-subheading" />
          <Subheading text={gender} />

          <Subheading text="Location" className="bold-subheading" />
          <Subheading text={location?.name} />

          <Subheading text="Origin" className="bold-subheading" />
          <Subheading text={origin?.name} />

          <Subheading text="Species" className="bold-subheading" />
          <Subheading text={species} />
        </div>
      </div>
    </div>
  );
};
