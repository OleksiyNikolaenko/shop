import { Header } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'shop',
  description: 'shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
