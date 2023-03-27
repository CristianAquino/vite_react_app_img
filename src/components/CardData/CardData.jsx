import { Link } from "react-router-dom";
import style from "./CardData.module.css";

const CardData = ({ data }) => {
  const { title, lastChapters } = data;

  const handleTime = (chapter) => {
    let hoy = new Date();
    let apiTime = new Date(chapter);
    let diferencia = hoy.getTime() - apiTime.getTime();
    let days = Math.floor(diferencia / 1000 / 60 / 60);
    return days;
  };

  return (
    <div className={style.cardData}>
      <p
        className={`title16bold ${style["title16bold--var"]} ${style.cardData__title}`}
      >
        {title}
      </p>
      {lastChapters.map((chapter) => {
        const fecha = handleTime(chapter.createdAt);
        return (
          <Link
            key={chapter.id}
            to={`/view/${data.title}/${chapter.name}`}
            className="link"
          >
            <div className={style.chContainer}>
              <p className={style.ch}>{chapter.name}</p>
              <p className={fecha <= 72 ? style["ch--new"] : style["ch--date"]}>
                {fecha <= 72 ? "New" : chapter.createdAt.split("T")[0]}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardData;
