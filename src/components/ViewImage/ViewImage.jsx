import Image from "../CardImage/Image";
import style from "./ViewImage.module.css";

import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineLeftCircle,
} from "react-icons/ai";

const ViewImage = () => {
  const styleContainerImage = {
    borderRadius: 0,
  };
  const styleTagImage = {
    verticalAlign: "middle",
  };
  return (
    <div className={style.view}>
      <div className={`title32bold ${style["title32bold--var"]}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        temporibus?
      </div>
      <div className={style.view__controls}>
        <AiOutlineHome className="icon" />
        <AiOutlineLeftCircle className="icon" />
        <div className={style.view__container__select}>
          <div
            className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
          >
            <AiOutlineLeft />
          </div>
          <select name="" className={style.view__select}>
            <option value="3">Chapter 3</option>
            <option value="2">Chapter 2</option>
            <option value="1">Chapter 1</option>
          </select>
          <div
            className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
          >
            <AiOutlineRight />
          </div>
        </div>
        <AiOutlineLike className="icon" />
      </div>
      <div className={style.view__body}>
        <Image
          styleContainerImage={styleContainerImage}
          styleTagImage={styleTagImage}
        />
        <Image
          styleContainerImage={styleContainerImage}
          styleTagImage={styleTagImage}
        />
        <Image
          styleContainerImage={styleContainerImage}
          styleTagImage={styleTagImage}
        />
      </div>
      <div className={style.view__footer}>
        <div className={style.view__container__select}>
          <div
            className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
          >
            <AiOutlineLeft />
          </div>
          <select name="" className={style.view__select}>
            <option value="3">Chapter 3</option>
            <option value="2">Chapter 2</option>
            <option value="1">Chapter 1</option>
          </select>
          <div
            className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImage;
