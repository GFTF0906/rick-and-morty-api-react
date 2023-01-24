import { Link } from 'react-router-dom';
import { Title } from '../Headings/Title';

export const Header = () => {
  return (
    <header className="min-w-full py-5 px-10 bg-gray-700">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-center sm:justify-between"
      >
        <Title text="Rick and Morty Info" className="text-2xl font-bold" />
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
      </nav>
    </header>
  );
};
