import { NavbarListItem } from './NavbarListItem';

export const NavbarList = () => {
  return (
    <ul className="hidden sm:flex sm:items-center sm:justify-center sm:gap-4">
      <NavbarListItem linkLocation="/" text="Home" />
      <NavbarListItem linkLocation="/characters" text="Characters" />
      <NavbarListItem linkLocation="/locations" text="Locations" />
      <NavbarListItem linkLocation="/episodes" text="Episodes" />
    </ul>
  );
};
