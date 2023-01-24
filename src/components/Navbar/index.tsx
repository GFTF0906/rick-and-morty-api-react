import { Title } from '../Headings/Title';
import { NavbarList } from './NavbarList';

export const Navbar = () => {
  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center justify-center sm:justify-between"
    >
      <Title text="Rick and Morty I.N.F.O" className="text-2xl font-bold" />
      <NavbarList />
    </nav>
  );
};
