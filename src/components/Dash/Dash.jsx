import style from "./Dash.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "../CardImage/Image";

const Dash = () => {
  const contenido = true;
  return (
    <div className={style.dash__container}>
      <div className={style.dash__header}>
        <span className={style.dash__title}>Mis folders creados</span>
        <AiOutlinePlus className={style.dash__icon} />
      </div>

      <div className={style.dash__body}>
        {contenido ? (
          <div className={style["dash__body--grid"]}>
            <Image />
          </div>
        ) : (
          <span className={style.dash__msg}>
            Usted no tiene folders creados
          </span>
        )}
      </div>
    </div>
  );
};

export default Dash;
