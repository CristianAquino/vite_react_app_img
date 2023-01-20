import Image from "../CardImage/Image";
import style from "./Folder.module.css";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineLike,
  AiOutlineHeart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import { HiOutlineIdentification, HiOutlineBookOpen } from "react-icons/hi";
import { BsBrush, BsTag } from "react-icons/bs";
import { BiUserCircle, BiRadioCircleMarked } from "react-icons/bi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Folder = () => {
  const dimImge = {
    borderRadius: "24px",
  };

  return (
    <div className={style.folder}>
      <div className={style.folder__title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad.
      </div>

      <div className={style.folder__body}>
        <Image dimension={dimImge} />
        <div className={style.folder__contentIcons}>
          <AiFillStar className={style.folder__icon} />
          <AiFillStar className={style.folder__icon} />
          <AiFillStar className={style.folder__icon} />
          <AiFillStar className={style.folder__icon} />
          <AiFillStar className={style.folder__icon} />
        </div>
        <div className={style.folder__info}>
          <div className={style.folder__tag}>
            <GiAlliedStar className={style.folder__icon} />
            <span className={style.folder__tag__data}>Ranking</span>
            <span className={style.folder__tag__data}>average 4.5</span>
          </div>
          <div className={style.folder__tag}>
            <HiOutlineIdentification className={style.folder__icon} />
            <span className={style.folder__tag__data}>other name</span>
            <span className={style.folder__tag__data}>text</span>
          </div>
          <div className={style.folder__tag}>
            <BiUserCircle className={style.folder__icon} />
            <span className={style.folder__tag__data}>author</span>
            <span className={style.folder__tag__data}>author</span>
          </div>
          <div className={style.folder__tag}>
            <BsBrush className={style.folder__icon} />
            <span className={style.folder__tag__data}>artist</span>
            <span className={style.folder__tag__data}>artist</span>
          </div>
          <div className={style.folder__tag}>
            <BiRadioCircleMarked className={style.folder__icon} />
            <span className={style.folder__tag__data}>status</span>
            <span
              className={`${style.folder__tag__data} ${style["folder__tag__data--variant"]}`}
            >
              on going
            </span>
          </div>
          <div className={style.folder__tag}>
            <BsTag className={style.folder__icon} />
            <span className={style.folder__tag__data}>tags</span>
            <span className={style.folder__tag__data}>tags</span>
          </div>
          <div className={style.folder__tag}>
            <AiOutlineEye className={style.folder__icon} />
            <span className={style.folder__tag__data}>view</span>
            <span className={style.folder__tag__data}>123213213</span>
          </div>
          <div className={style.folder__tag}>
            <IoHeartCircleOutline className={style.folder__icon} />
            <span className={style.folder__tag__data}>follow</span>
            <AiOutlineLike className={style.folder__icon} />
          </div>
        </div>
        <div className={style.folder__sumary}>
          <div className={style.folder__sumary__head}>
            <HiOutlineBookOpen className={style.folder__icon} />
            <span className={style.folder__sumary__title}>sumary</span>
          </div>
          <div className={style.folder__sumary__body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            suscipit.
          </div>
        </div>
        <div className={style.folder__chapter}>
          <div className={style.folder__chapter__head}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <AiOutlineUnorderedList className={style.folder__icon} />
              <span className={style.folder__chapter__title}>chapters</span>
            </div>
            <CgArrowsExchangeAltV className={style.folder__icon} />
          </div>
          <div className={style.folder__chapter__body}>
            <div className={style.folder__ch}>
              <span>chapter 2</span>
              <AiOutlineHeart className={style.folder__icon} />
            </div>
            <div className={style.folder__ch}>
              <span>chapter 1</span>
              <AiOutlineHeart className={style.folder__icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
