import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context/NavbarContext';
import { BackgroundBlur } from '../BackgroundBlur';
import { HamburgerMenu } from '../HamburgerMenu';
import { Title } from '../Headings/Title';
import { MobileMenu } from '../MobileMenu';
import { MobileNavbar } from './MobileNavbar';
import { NavbarList } from './NavbarList';
('');
export const Navbar = () => {
  const { isMobileMenuOpen } = useContext(NavbarContext);

  return (
    <nav
      aria-label="Main Navigation"
      className="flex justify-end sm:items-center sm:justify-between"
    >
      <Link to="/">
        <Title
          text="Rick and Morty I.N.F.O"
          className="hidden sm:block sm:text-2xl sm:font-bold"
        />
      </Link>
      {<NavbarList />}

      {!isMobileMenuOpen && <HamburgerMenu />}

      {isMobileMenuOpen && (
        <>
          <BackgroundBlur />
          <MobileMenu children={<MobileNavbar />} />
        </>
      )}
    </nav>
  );
};
