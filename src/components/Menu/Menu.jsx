import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ open, close }) => {
  const { isLogged } = useSelector((state) => state.authSlice);

  return (
    <div
      className={
        open ? `${style.menu} ${style["menu--active"]}` : `${style.menu}`
      }
    >
      <input
        className={style.menu__input}
        placeholder="Buscar..."
        type="text"
      />
      <ul className={style.list}>
        {!isLogged && (
          <li className={style.list__item}>
            <Link onClick={close} to="login" className={style.list__item__link}>
              Acceder
            </Link>
          </li>
        )}
        {!isLogged && (
          <li className={style.list__item}>
            <Link
              onClick={close}
              to="register"
              className={style.list__item__link}
            >
              Registrarse
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
