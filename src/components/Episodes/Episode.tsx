import { TEpisode } from '../../types/EpisodeType';
import { Subheading } from '../Headings/Subheading';
import { Title } from '../Headings/Title';
import { HorizontalRow } from '../Rows/HorizontalRow';

export const Episode = ({
  air_date,
  characters,
  episode,
  name,
  url,
}: TEpisode) => {
  return (
    <div className="w-full rounded p-4 bg-gray-200">
      <Title text={name} className={'text-2xl font-bold'} />
      <HorizontalRow />

      <Subheading text="Air Date" className="bold-subheading" />
      <Subheading text={air_date} />

      <Subheading text="Episode" className="bold-subheading" />
      <Subheading text={episode} />
    </div>
  );
};
