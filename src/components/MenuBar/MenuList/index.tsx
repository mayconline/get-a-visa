import { Paragraph } from '@/components/Paragraph';
import Link from 'next/link';

export const MenuList = () => {
  return (
    <nav className="flex flex-col xl:flex-row items-center gap-10">
      <Link href="/">
        <Paragraph className="font-bold text-gray-300">Home</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className="text-gray-300">Quem Somos</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className="text-gray-300">Serviços</Paragraph>
      </Link>
      <Link href="/">
        <Paragraph className="text-gray-300">Contato</Paragraph>
      </Link>
    </nav>
  );
};
