import { MenuContainerMobile } from './MenuContainerMobile';
import { MenuList } from './MenuList';

export const MenuBar = () => {
  return (
    <>
      <header className="hidden xl:flex">
        <MenuList />
      </header>
      <MenuContainerMobile />
    </>
  );
};
