import style from "./NavBar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { useMenu } from "../../hooks/useMenu";

const NavBar = () => {
  const [isOpenMenu, openMenu, closeMenu] = useMenu();

  const handleChangeIconMenu = () => {
    if (isOpenMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <div className={style.navBar}>
        <Logo />
        <div onClick={handleChangeIconMenu} className={style.icon}>
          {isOpenMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <Menu open={isOpenMenu} close={closeMenu} />
    </>
  );
};

export default NavBar;
