import CardImage from "../CardImage/CardImage";
import CardData from "../CardData/CardData";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <CardImage />
      <CardData />
    </div>
  );
};

export default Card;
