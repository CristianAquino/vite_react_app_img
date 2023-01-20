import style from "./CardData.module.css";

const CardData = () => {
  const chapters = [
    {
      id: 1,
      ch: "Ch. 101",
      f: "13/01/2022",
    },
    {
      id: 2,
      ch: "Ch. 100",
      f: "11/01/2022",
    },
  ];

  const hoy = new Date().getDate();

  return (
    <div className={style.cardData}>
      <p className={style.cardData__title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        ratione.
      </p>
      {chapters.map((chapter) => {
        const pub = chapter.f.split("/")[0];
        return (
          <div className={style.ch} key={chapter.id}>
            <p className={style["ch--first"]}>{chapter.ch}</p>
            <p className={hoy <= pub ? style["ch--second"] : style["ch--date"]}>
              {hoy <= pub ? "New" : chapter.f}
            </p>
          </div>
        );
      })}
      {/* <div className={style.ch}>
        <p className={style.first}>Ch.101</p>
        <p className={style.second}>New</p>
      </div> */}
      {/* <div className={style.ch}>
        <p className={style.first}>Ch.100</p>
        <p className={style.date}>27/07/2022</p>
      </div> */}
    </div>
  );
};

export default CardData;
