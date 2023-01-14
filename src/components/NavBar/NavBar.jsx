import styles from "./NavBar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// components
import Logo from "../Logo/Logo";

// states
import { useState } from "react";

const NavBar = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleChangeIconMenu = () => {
    setMenuBar(!menuBar);
  };
  return (
    <div className={styles.navBar}>
      <Logo />
      <div onClick={handleChangeIconMenu} className={styles.iconBars}>
        {menuBar ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default NavBar;
