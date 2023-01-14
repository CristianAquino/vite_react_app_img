import style from "./Navigate.module.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navigate = () => {
  return (
    <div className={style.navigate}>
      <div>
        <AiOutlineLeft />
      </div>
      <div className={style.active}>1</div>
      <div>2</div>
      <div>3</div>
      <span>...</span>
      <div>5</div>
      <div>Fin</div>
      <div>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default Navigate;
