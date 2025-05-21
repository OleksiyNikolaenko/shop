import Link from 'next/link';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="py-4">
      <nav className="container mx-auto flex items-center justify-between px-2">
        <Link className="text-4xl font-bold" href="/">
          shop
        </Link>

        <Navigation />
      </nav>
    </header>
  );
};
