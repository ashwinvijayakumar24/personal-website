import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import av_logo from '../../assets/images/logos/av_transparent.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-900 text-white fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center max-w-full px-4">
        <div>
          <Link to='/' className='hidden md:block'>
            <img className="size-24" src={av_logo} alt="av logo" />
          </Link>
          <a href='/' onClick={isOpen ? toggleMenu : null} className='block md:hidden'>
            <img className="size-24" src={av_logo} alt="av logo" />
          </a>
        </div>
        <div className="hidden md:flex space-x-12 mr-8">
          <Link to="/blogs" className="hover:underline px-4 py-2 ">Film Reviews</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 pb-4 bg-neutral-900">
            <a href="/blogs" onClick={toggleMenu}className="hover:underline px-4 py-2 text-center">Film Reviews</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;