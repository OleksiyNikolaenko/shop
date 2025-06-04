import { Header } from '@/src/widgets/header'
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "kikko",
    description: "e-com pet project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} flex h-screen flex-col antialiased`}>
                  <Header/>
                <main className="flex-1">{children}</main>
            </body>
        </html>
    );
}
