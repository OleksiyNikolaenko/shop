'use client';

import { AlignJustify, ShoppingCart, Star, User, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClasses = `
  flex flex-col items-center justify-center gap-10
  fixed top-0 right-0 z-10 h-screen w-4/5 bg-gray-500
  transform transition-transform duration-300 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-[550px]'}
  
  sm:static sm:h-auto sm:w-auto sm:bg-white sm:flex-row sm:translate-x-0
`;

  return (
    <>
      <ul className={menuClasses}>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="relative" href="/favorites">
            <Star size={30} />
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="relative" href="/cart">
            <ShoppingCart size={30} />
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link href="/profile">
            <User size={30} />
          </Link>
        </li>
      </ul>
      <button
        className="relative z-20 sm:invisible sm:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}>
        {!isMenuOpen ? <AlignJustify /> : <X />}
      </button>
    </>
  );
};
