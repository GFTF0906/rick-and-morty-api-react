import { NavbarListItem } from './NavbarListItem';

export const MobileNavbar = () => {
  return (
    <ul className="flex flex-col text-xl gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
      <NavbarListItem linkLocation="/" text="Home" />
      <NavbarListItem linkLocation="/characters" text="Characters" />
      <NavbarListItem linkLocation="/locations" text="Locations" />
      <NavbarListItem linkLocation="/episodes" text="Episodes" />
    </ul>
  );
};
