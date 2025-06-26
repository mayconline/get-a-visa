import React from 'react';
import Image from 'next/image';
import { MenuBar } from '@/components';
import Logo from '@/assets/logo/get-visa-logo.svg';

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-7 gap-4">
      <Image src={Logo} alt="Get Visa Logo" width={152} height={42} priority />
      <MenuBar />
    </header>
  );
};
