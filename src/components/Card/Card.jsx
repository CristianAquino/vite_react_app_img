import CardImage from "../CardImage/CardImage";
import CardData from "../CardData/CardData";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className={style.card}>
      <Link to={`folder/${data.title}`}>
        <CardImage data={data} />
      </Link>
      <CardData data={data} />
    </div>
  );
};

export default Card;
