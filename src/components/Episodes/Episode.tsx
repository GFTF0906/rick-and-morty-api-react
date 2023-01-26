import { Link } from 'react-router-dom';
import { TEpisode } from '../../types/EpisodeType';
import { Subheading } from '../Headings/Subheading';
import { Title } from '../Headings/Title';
import { HorizontalRow } from '../Rows/HorizontalRow';

export const Episode = ({
  id,
  air_date,
  characters,
  episode,
  name,
}: TEpisode) => {
  return (
    <div className="w-full rounded p-4 bg-gray-200">
      <Link to={`/episodes/${id}`}>
        <Title
          text={name}
          className={'text-2xl font-bold hover:text-gray-600'}
        />
      </Link>
      <HorizontalRow />

      <Subheading text="Air Date" className="bold-subheading" />
      <Subheading text={air_date} />

      <Subheading text="Episode" className="bold-subheading" />
      <Subheading text={episode} />
    </div>
  );
};
