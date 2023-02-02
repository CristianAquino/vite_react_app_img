import style from "./Navigate.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navigate = () => {
  return (
    <div className={style.navigateContent}>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate}`}
      >
        <AiOutlineLeft />
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate} ${style["navigate--active"]}`}
      >
        1
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate}`}
      >
        2
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate}`}
      >
        3
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style["navigate--more"]}`}
      >
        ...
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate}`}
      >
        5
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate} ${style["navigate--end"]}`}
      >
        Fin
      </span>
      <span
        className={`tag14medium ${style["tag14medium--var"]} ${style.navigate}`}
      >
        <AiOutlineRight />
      </span>
    </div>
  );
};

export default Navigate;
