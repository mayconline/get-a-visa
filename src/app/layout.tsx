import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const fontInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tirar Visto',
  description: 'Tire seu visto conosco e não tenha nenhuma surpresa negativa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontInter.variable} antialiased px-4 pt-4 lg:max-w-[1440px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
