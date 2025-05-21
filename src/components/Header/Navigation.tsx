'use client';

import { AlignJustify, ShoppingCart, Star, User, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Bage } from '../Bage';

export const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClasses = `
  flex flex-col items-center justify-center gap-10
  fixed top-0 right-0 h-screen w-4/5 bg-black/40
  transform transition-transform duration-300 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-[550px]'}
  
  sm:static sm:h-auto sm:w-auto sm:bg-white sm:flex-row sm:translate-x-0
`;

  return (
    <>
      <ul className={menuClasses}>
        <li>
          <Link className="relative" href="/">
            <Star size={30} />
            <Bage count={10} />
          </Link>
        </li>
        <li>
          <Link className="relative" href="/">
            <ShoppingCart size={30} />
            <Bage count={10} />
          </Link>
        </li>
        <li>
          <Link href="/">
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
