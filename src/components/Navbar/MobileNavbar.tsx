import { Episode, Home, Location, Person } from '../svgs';
import { NavbarListItem } from './NavbarListItem';

export const MobileNavbar = () => {
  return (
    <ul className="flex flex-col text-xl gap-0 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
      <NavbarListItem linkLocation="/" text="Home" icon={<Home />} />
      <NavbarListItem
        linkLocation="/characters"
        text="Characters"
        icon={<Person />}
      />
      <NavbarListItem
        linkLocation="/locations"
        text="Locations"
        icon={<Location />}
      />
      <NavbarListItem
        linkLocation="/episodes"
        text="Episodes"
        icon={<Episode />}
      />
    </ul>
  );
};
