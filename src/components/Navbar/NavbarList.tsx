import { Link } from 'react-router-dom';

export const NavbarList = () => {
  return (
    <ul className="hidden sm:flex sm:items-center sm:justify-center sm:gap-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
      <li>
        <Link to="/locations">Locations</Link>
      </li>
      <li>
        <Link to="/episodes">Episodes</Link>
      </li>
    </ul>
  );
};
