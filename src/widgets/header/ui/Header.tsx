import { HEADER } from '@/src/shared/constants'
import Link from "next/link"
import { Menu } from "./Menu"

export const Header = () => {
    return (
        <header className="container mx-auto rounded-b-3xl px-2 py-4 shadow-sm">
            <nav className="flex items-center justify-between">
                <Link className="text-xl font-semibold" href="/">
                    ki<span className="text-blue-600">k</span>ko
                </Link>

                <ul className="hidden sm:flex sm:gap-5">
                    {HEADER.map((link) => {
                        return (
                            <li
                                className="transition-colors ease-in-out hover:text-blue-600 sm:text-lg"
                                key={link.alias}>
                                <Link href={link.href}> {link.alias}</Link>
                            </li>
                        );
                    })}
                </ul>

                <Menu />
            </nav>
        </header>
    );
};
