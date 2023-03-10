import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context/NavbarContext';
import { Subheading } from '../Headings/Subheading';

export const NavbarListItem = ({
  text,
  linkLocation,
  icon,
}: {
  text: string;
  linkLocation: string;
  icon?: JSX.Element;
}) => {
  const { toggleMobileMenu } = useContext(NavbarContext);

  return (
    <li onClick={toggleMobileMenu}>
      <Link
        to={linkLocation}
        className="grid grid-cols-2 px-2 font-bold hover:opacity-70 sm:flex sm:items-center"
      >
        {icon}
        <Subheading text={text} className="justify-self-start" />
      </Link>
    </li>
  );
};
