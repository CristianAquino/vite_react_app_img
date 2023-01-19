import TagRanking from "../TagRanking/TagRanking";
import style from "./Ranking.module.css";

const Ranking = () => {
  return (
    <div className={style.ranking}>
      <div className={style.ranking__header}>
        <div className={`${style.ranking__active} ${style.ranking__section}`}>
          Top Day
        </div>
        <div className={`${style.ranking__section}`}>Top Month</div>
        <div className={`${style.ranking__section}`}>Top All</div>
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
