import style from "./Dash.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "../CardImage/Image";

const Dash = () => {
  const contenido = true;
  const styleContainerImage = {
    cursor: "pointer",
  };

  return (
    <div className={style.dash__container}>
      <div className={style.dash__head}>
        <span className={`tag24bold ${style["tag24bold--var"]}`}>
          Mis folders creados
        </span>
        <AiOutlinePlus className={`icon ${style["icon--var"]}`} />
      </div>
      <div className={style.dash__body}>
        {contenido ? (
          <div className={style["dash__body--grid"]}>
            <Image styleContainerImage={styleContainerImage} />
          </div>
        ) : (
          <span
            className={`description14medium ${style["description14medium--var"]}`}
          >
            Usted no tiene folders creados
          </span>
        )}
      </div>
    </div>
  );
};

export default Dash;
