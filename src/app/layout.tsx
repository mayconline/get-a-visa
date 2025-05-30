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
    <html lang="en">
      <body className={`${fontInter.variable} antialiased`}>{children}</body>
    </html>
  );
}
