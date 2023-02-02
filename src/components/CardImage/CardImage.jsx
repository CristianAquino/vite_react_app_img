import { useState } from "react";
import style from "./CardImage.module.css";
import Image from "./Image";

const CardImage = () => {
  const [hoy, setHoy] = useState(new Date().getDate());
  const [pub, setPub] = useState("");

  const styleContainerImage = {
    cursor: "pointer",
  };
  const dato = {
    f: "12/01/2020",
    e: "",
  };
  // const hoy = new Date().getDate();
  // const pub = dato.f.split("/")[0];
  if (pub === "") {
    setPub(dato.f.split("/")[0]);
  }

  const handleState = (dato) => {
    const { f, e } = dato;
    if ((e !== "end") & (hoy <= pub)) {
      return (
        <p
          className={`tag8bold ${style["tag8bold--var"]} ${style["tag8bold--new"]}`}
        >
          Nuevo
        </p>
      );
    } else if (e === "end") {
      return <p className={`tag8bold ${style["tag8bold--var"]}`}>Completo</p>;
    }
  };

  return (
    <Image styleContainerImage={styleContainerImage}>
      <p className={`tag12regular ${style["tag12regular--chapter"]}`}>
        Chapter 101
      </p>
      <div
        className={`${style.stateFolder} ${
          hoy <= pub ? `${style["stateFolder--new"]}` : ""
        } ${dato.e === "end" ? `${style["stateFolder--end"]}` : ""}`}
      >
        {/* {hoy <= pub ? <p>New</p> : <p>Completo</p>} */}
        {handleState(dato)}
      </div>
    </Image>
  );
};

export default CardImage;
