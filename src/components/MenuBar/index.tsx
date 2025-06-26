import React from 'react';
import { MenuContainerMobile } from './MenuContainerMobile';
import { MenuList } from './MenuList';

export const MenuBar = () => {
  return (
    <>
      <header className="hidden xl:flex" data-testid="desktop-menu">
        <MenuList />
      </header>
      <MenuContainerMobile />
    </>
  );
};
