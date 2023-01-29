export const MobileMenu = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <section className="fixed right-0 top-0 w-1/2 h-full z-20 p-10 bg-gray-900 sm:hidden">
        {children}
      </section>
    </>
  );
};
