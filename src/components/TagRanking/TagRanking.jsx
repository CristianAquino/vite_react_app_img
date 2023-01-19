import Image from "../Folder/Image";
import style from "./TagRanking.module.css";

import { AiOutlineEye } from "react-icons/ai";

const TagRanking = () => {
  const sizeImage = {
    //   height: "100%",
    //   width: "87px",
    borderRadius: "4px",
  };
  return (
    <div className={style.tagRanking}>
      <p className={style.tagRanking__number}>#1</p>
      <Image dimension={sizeImage} />
      <div className={style.tagRankingData}>
        <p className={style.tagRankingData__title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quidem maiores itaque, adipisci sit veritatis!
        </p>
        <div className={style.tagRankingData__view}>
          <AiOutlineEye />
          <span className={style.tagRankingData__number}>123456 View</span>
        </div>
      </div>
    </div>
  );
};

export default TagRanking;
