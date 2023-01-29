type BackgroundBlurProps = {
  toggleMobileMenu: () => void;
};

export const BackgroundBlur = ({ toggleMobileMenu }: BackgroundBlurProps) => {
  return (
    <span
      className="fixed left-0 top-0 w-full h-full z-10 bg-[#000000ce] sm:hidden"
      onClick={toggleMobileMenu}
    ></span>
  );
};
