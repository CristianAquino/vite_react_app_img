import style from "./Navigate.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navigate = () => {
  return (
    <div className={style.navigate}>
      <div className={style.navigate__tag}>
        <AiOutlineLeft />
      </div>
      <div className={`${style.navigate__tag} ${style.navigate__active}`}>
        1
      </div>
      <div className={style.navigate__tag}>2</div>
      <div className={style.navigate__tag}>3</div>
      <span className={style.navigate__more}>...</span>
      <div className={style.navigate__tag}>5</div>
      <div className={`${style.navigate__tag} ${style.navigate__tag__end}`}>
        Fin
      </div>
      <div className={style.navigate__tag}>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default Navigate;
