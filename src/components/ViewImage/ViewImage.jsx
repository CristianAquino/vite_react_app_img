import Image from "../CardImage/Image";
import style from "./ViewImage.module.css";

import {
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlineLike,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const ViewImage = () => {
  const dimImage = {
    borderRadius: 0,
  };
  return (
    <div className={style.view}>
      <div className={style.view__head}>
        <div className={style.view__title}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          temporibus?
        </div>
        <div className={style.view__controls}>
          <AiOutlineHome className={style.view__icon} />
          <AiOutlineFolder className={style.view__icon} />
          <div className={style.view__container__select}>
            <div className={style.view__arrow}>
              <AiOutlineLeft />
            </div>
            <select name="" className={style.view__select}>
              <option value="3">Chapter 3</option>
              <option value="2">Chapter 2</option>
              <option value="1">Chapter 1</option>
            </select>
            <div className={style.view__arrow}>
              <AiOutlineRight />
            </div>
          </div>
          <AiOutlineLike className={style.view__icon} />
        </div>
      </div>
      <div className={style.view__body}>
        <Image dimension={dimImage} />
        <Image dimension={dimImage} />
        <Image dimension={dimImage} />
      </div>
      <div className={style.view__footer}>
        <div className={style.view__container__select}>
          <div className={style.view__arrow}>
            <AiOutlineLeft />
          </div>
          <select name="" className={style.view__select}>
            <option value="3">Chapter 3</option>
            <option value="2">Chapter 2</option>
            <option value="1">Chapter 1</option>
          </select>
          <div className={style.view__arrow}>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImage;
