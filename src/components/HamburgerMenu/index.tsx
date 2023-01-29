import { useContext } from 'react';
import { NavbarContext } from '../../context/NavbarContext';

export const HamburgerMenu = () => {
  const { toggleMobileMenu } = useContext(NavbarContext);

  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-10 fill-gray-300 sm:hidden"
      onClick={toggleMobileMenu}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Menu</title>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Menu">
            <rect
              id="Rectangle"
              fillRule="nonzero"
              x="0"
              y="0"
              width="24"
              height="24"
            ></rect>
            <line
              x1="5"
              y1="7"
              x2="19"
              y2="7"
              id="Path"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="17"
              x2="19"
              y2="17"
              id="Path"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              id="Path"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
};
