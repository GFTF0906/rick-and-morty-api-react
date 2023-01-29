import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';

export const BackgroundBlur = () => {
  const { toggleMobileMenu } = useContext(NavbarContext);

  return (
    <span
      className="fixed left-0 top-0 w-full h-full z-10 bg-[#000000ce] sm:hidden"
      onClick={toggleMobileMenu}
    ></span>
  );
};
