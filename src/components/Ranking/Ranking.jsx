import TagRanking from "../TagRanking/TagRanking";
import style from "./Ranking.module.css";

const Ranking = () => {
  return (
    <div className={style.ranking}>
      <div className={style.top}>
        <div className={`${style.active} ${style.top1}`}>Top Day</div>
        <div className={`${style.top1}`}>Top Month</div>
        <div className={`${style.top1}`}>Top All</div>
      </div>
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
      <TagRanking />
    </div>
  );
};

export default Ranking;
