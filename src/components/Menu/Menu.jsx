import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ open, close }) => {
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
        <li className={style.list__item}>
          <Link onClick={close} to="login" className={style.list__item__link}>
            Acceder
          </Link>
        </li>
        <li className={style.list__item}>
          <Link onClick={close} to="login" className={style.list__item__link}>
            Registrarse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
