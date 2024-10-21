'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavbarMenu from './components/NavbarMenu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg p-4 relative z-50">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent">
          QuantumCoders
        </span>
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`flex-none hidden lg:flex`}>
        <NavbarMenu isMobile={false}/>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-lg transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}
      >
        <NavbarMenu isMobile={true}/>
      </div>
    </nav>
  );
};

export default Navbar;
