import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next Static App',
    description: 'Static only next app',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen bg-slate-800`}>
                {children}
            </body>
        </html>
    );
}
