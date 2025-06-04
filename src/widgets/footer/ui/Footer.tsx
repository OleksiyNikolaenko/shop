import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="container mx-auto rounded-t-3xl px-1 py-2">
            <p className="text-center">
                {" "}
                &copy;anikko. {new Date().getFullYear()} рік.
            </p>
            <ul className="flex items-center justify-center gap-2">
                <li>
                    <Link
                        target="_blank"
                        href="https://github.com/OleksiyNikolaenko">
                        <Image
                            className="h-6 w-6"
                            src="/github.svg"
                            alt="github icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" href="https://t.me/takedelight">
                        <Image
                            className="h-6 w-6"
                            src="/telegram.svg"
                            alt="github icon"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};
