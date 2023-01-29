import { createContext, FC, ReactNode, useState } from 'react';

type TNavbarContext = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const contextDefaultValues = {
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
};

export const NavbarContext =
  createContext<TNavbarContext>(contextDefaultValues);

export const NavbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(
    contextDefaultValues.isMobileMenuOpen
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <NavbarContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};
