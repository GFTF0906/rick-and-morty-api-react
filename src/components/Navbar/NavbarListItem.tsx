import { Link } from 'react-router-dom';

export const NavbarListItem = ({
  text,
  linkLocation,
}: {
  text: string;
  linkLocation: string;
}) => {
  return (
    <li>
      <Link to={linkLocation} className="font-bold hover:opacity-70">
        {text}
      </Link>
    </li>
  );
};
