import styles from "./NavBar.module.css";
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
      <div className={styles.navBar}>
        <Logo />
        <div onClick={handleChangeIconMenu} className={styles.iconBars}>
          {isOpenMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <Menu open={isOpenMenu} />
    </>
  );
};

export default NavBar;
