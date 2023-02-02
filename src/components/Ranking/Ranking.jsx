import TagRanking from "../TagRanking/TagRanking";
import style from "./Ranking.module.css";

const Ranking = () => {
  return (
    <div className={style.rankingContainer}>
      <div
        className={`tag14medium ${style["tag14medium--var"]} ${style.ranking__head}`}
      >
        <div
          className={`${style["ranking--active"]} ${style.ranking__section}`}
        >
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
