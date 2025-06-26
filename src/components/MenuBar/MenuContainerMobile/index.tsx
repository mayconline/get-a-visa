'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { MenuList } from '@/components';
import MenuIcon from '@/assets/icons/menu-icon.svg';
import { Button, ButtonVariant } from '@/components/Button';

export const MenuContainerMobile = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  return (
    <span className="relative xl:hidden" data-testid="mobile-menu">
      <Button
        type="button"
        aria-label="menu"
        variant={ButtonVariant.Icon}
        onClick={handleOpenMobileMenu}
      >
        <Image src={MenuIcon} alt="menu icon" width={48} height={48} />
      </Button>

      <header
        className={clsx(
          'absolute top-0 right-16 bg-dark/90 rounded-1xl p-5 transition-all z-10 bg-white border border-blue-500 rounded-2xl',
          {
            hidden: !openMobileMenu,
            'block w-[300px]': openMobileMenu,
          }
        )}
      >
        <MenuList />
      </header>
    </span>
  );
};
