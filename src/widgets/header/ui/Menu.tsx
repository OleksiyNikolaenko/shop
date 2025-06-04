"use client";

import { HEADER } from '@/src/shared/constants'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '@/src/shared/ui'
import Link from "next/link"
import { useState } from "react"

export const Menu = () => {
    const [isVisible, setVisible] = useState(false);
    return (
        <Drawer direction="right" open={isVisible} onOpenChange={setVisible}>
            <DrawerTrigger asChild>
                <Button className="sm:hidden" size="lg" variant="ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor">
                        <path d="M3 12h18" />
                        <path d="M3 18h18" />
                        <path d="M3 6h18" />
                    </svg>
                </Button>
            </DrawerTrigger>
            <DrawerTitle className="hidden">menu</DrawerTitle>
            <DrawerContent className="rounded-l-xl">
                <DrawerClose asChild>
                    <Button
                        className="flex items-end justify-end"
                        size="lg"
                        variant="ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </Button>
                </DrawerClose>
                <ul className="flex h-full flex-col items-center justify-center gap-5">
                    {HEADER.map(({ alias, href }) => {
                        return (
                            <li key={alias}>
                                <Link className="text-xl" href={href}>
                                    {alias}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </DrawerContent>
        </Drawer>
    );
};
