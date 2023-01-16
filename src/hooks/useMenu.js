import { useState } from "react";

export const useMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  const openMenu = () => {
    setIsOpenMenu(true);
  };

  return [isOpenMenu, openMenu, closeMenu];
};
