import style from "./Menu.module.css";

const Menu = ({ open }) => {
  return (
    <div
      className={open ? `${style.menu} ${style.menuActive}` : `${style.menu}`}
    >
      <input placeholder="Buscar..." type="text" />
      <ul className={style.listMenu}>
        <li>Acceder</li>
        <li>Registrarse</li>
      </ul>
    </div>
  );
};

export default Menu;
