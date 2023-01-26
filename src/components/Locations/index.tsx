import { TLocation } from '../../types/LocationType';
import { Location } from './Location';

type LocationsProps = {
  results: TLocation[];
};

export const Locations = ({ results: locations }: LocationsProps) => {
  if (!locations) return <></>;

  return (
    <>
      <section className="flex flex-col px-8 gap-4 text-gray-900 sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:px-80">
        {locations.map((location) => (
          <Location key={location?.id} {...location} />
        ))}
      </section>
    </>
  );
};
