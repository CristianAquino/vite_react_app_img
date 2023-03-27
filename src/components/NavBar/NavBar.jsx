// style
import style from "./NavBar.module.css";
// icons
import { BiUserCircle, BiSearch } from "react-icons/bi";
// hook
import { useMenu } from "../../hooks/useMenu";
// react-router-dom
import { Link } from "react-router-dom";
// components
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import MenuAvatar from "../MenuAvatar/MenuAvatar";
// redux
import { useSelector } from "react-redux";
import Image from "../CardImage/Image";

const NavBar = () => {
  // hook
  const [isOpenMenu, openMenu, closeMenu] = useMenu();
  // redux
  const { isLogged } = useSelector((state) => state.authSlice);
  const { user } = useSelector((state) => state.userSlice);

  // style components
  const styleAvatar = {
    fontSize: "21px",
    backgroundColor: `${user?.avatar.bg}`,
    width: "32px",
    height: "32px",
  };
  const styleContainerImage = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
  };
  const styleTagImage = {
    objectFit: "cover",
    objectPosition: "center",
  };

  // function
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search");
  };

  return (
    <div className={style.navBar}>
      <Link to="/">
        <Logo />
      </Link>
      <form className={`${style.formSearch}`} onSubmit={handleSearch}>
        <input
          className={`form__input ${style["form__input--var"]}`}
          placeholder="Buscar..."
          type="text"
        />
        <button className={`form__button ${style["form__button--var"]}`}>
          <BiSearch className={`icon ${style.icon__search}`} />
        </button>
      </form>
      {isOpenMenu && (
        <MenuAvatar open={isOpenMenu} close={closeMenu} user={user} />
      )}
      {isLogged ? (
        <div style={{ cursor: "pointer" }} onClick={openMenu}>
          {user?.urlAvatar ? (
            <Image
              styleContainerImage={styleContainerImage}
              styleTagImage={styleTagImage}
              url={user?.urlAvatar}
            />
          ) : (
            <Avatar styleAvatar={styleAvatar} name={user?.username} />
          )}
        </div>
      ) : (
        <div>
          <Link className={`link ${style["link--var"]}`} to="/register">
            <BiUserCircle className={`icon ${style["icon--var"]}`} />
            <span className={`title16bold`}>acceder</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
