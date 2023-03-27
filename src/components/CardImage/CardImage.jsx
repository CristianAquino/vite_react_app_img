import style from "./CardImage.module.css";
import Image from "./Image";

const CardImage = ({ data }) => {
  const styleContainerImage = {
    cursor: "pointer",
  };

  const status = () => {
    const date = data.createdAt;
    let day = handleTime(date);
    if (day <= 72) {
      return (
        <div className={`${style.stateFolder} ${style["stateFolder--new"]}`}>
          <p
            className={`tag8bold ${style["tag8bold--var"]} ${style["tag8bold--new"]}`}
          >
            Nuevo
          </p>
        </div>
      );
    } else if (data.status == 1) {
      return (
        <div className={`${style.stateFolder}  ${style["stateFolder--end"]}`}>
          <p className={`tag8bold ${style["tag8bold--var"]}`}>Completo</p>
        </div>
      );
    }
  };

  const handleTime = (chapter) => {
    let hoy = new Date();
    let apiTime = new Date(chapter);
    let diferencia = hoy.getTime() - apiTime.getTime();
    let days = Math.floor(diferencia / 1000 / 60 / 60);
    return days;
  };
  return (
    <Image styleContainerImage={styleContainerImage} url={data.img}>
      <p className={`tag12regular ${style["tag12regular--chapter"]}`}>
        {data.lastChapters[0].name}
      </p>
      {status()}
    </Image>
  );
};

export default CardImage;
