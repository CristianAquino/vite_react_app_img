import Image from "../CardImage/Image";
import style from "./TagRanking.module.css";

import { AiOutlineEye } from "react-icons/ai";

const TagRanking = () => {
  const styleContainerImage = {
    borderRadius: "4px",
  };
  const styleTagImage = {
    objectFit: "cover",
    objectPosition: "center",
  };
  return (
    <div className={style.tagRankingContent}>
      <p className={`tag24bold ${style["tagRanking--number"]}`}>#1</p>
      <Image
        styleContainerImage={styleContainerImage}
        styleTagImage={styleTagImage}
      />
      <div className={style.tagRankingData}>
        <p className={`title16bold ${style["tagRankingData--title"]}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quidem maiores itaque, adipisci sit veritatis!
        </p>
        <div className={style["tagRankingData--view"]}>
          <AiOutlineEye className={`icon ${style["icon--var"]}`} />
          <span className={`tag12regular ${style["tag12regular--var"]}`}>
            123456 View
          </span>
        </div>
      </div>
    </div>
  );
};

export default TagRanking;
