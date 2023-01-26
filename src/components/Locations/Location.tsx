import { Link } from 'react-router-dom';
import { TLocation } from '../../types/LocationType';
import { Subheading } from '../Headings/Subheading';
import { Title } from '../Headings/Title';
import { HorizontalRow } from '../Rows/HorizontalRow';

export const Location = ({ id, name, dimension, type }: TLocation) => {
  return (
    <div className="w-full rounded p-5 bg-gray-200">
      <Link to={`/locations/${id}`}>
        <Title
          text={name}
          className={'text-2xl font-bold hover:text-gray-600'}
        />
      </Link>
      <HorizontalRow />

      <Subheading text="Type" className="bold-subheading" />
      <Subheading text={type} />

      <Subheading text="Dimension" className="bold-subheading" />
      <Subheading text={dimension} />
    </div>
  );
};
