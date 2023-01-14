import Image from "../Folder/Image";
import style from "./TagRanking.module.css";

import { AiOutlineEye } from "react-icons/ai";

const TagRanking = () => {
  const sizeImage = {
    height: "100%",
    width: "87px",
    borderRadius: "4px",
  };
  return (
    <div className={style.tagRanking}>
      <p className={style.number}>#1</p>
      <Image dimension={sizeImage} />
      <div className={style.rankingData}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quidem maiores itaque, adipisci sit veritatis!
        </p>
        <div className={style.view}>
          <AiOutlineEye />
          <span>123456 View</span>
        </div>
      </div>
    </div>
  );
};

export default TagRanking;
