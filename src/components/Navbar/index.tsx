import { Link } from 'react-router-dom';
import { Title } from '../Headings/Title';
import { NavbarList } from './NavbarList';

export const Navbar = () => {
  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center justify-center sm:justify-between"
    >
      <Link to="/">
        <Title text="Rick and Morty I.N.F.O" className="text-2xl font-bold" />
      </Link>
      <NavbarList />
    </nav>
  );
};
