import { motion } from 'framer-motion';

export const MobileMenu = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <motion.section
        key="Mobile Menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 20 }}
        className="fixed right-0 top-0 w-[60%] h-full z-20 pl-2 pr-16 py-10 bg-gray-900 sm:hidden"
      >
        {children}
      </motion.section>
    </>
  );
};
