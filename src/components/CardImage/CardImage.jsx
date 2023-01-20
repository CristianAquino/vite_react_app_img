import { useState } from "react";
import style from "./CardImage.module.css";
import Image from "./Image";

const CardImage = () => {
  const [hoy, setHoy] = useState(new Date().getDate());
  const [pub, setPub] = useState("");
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
      return <p className={style.imageContainer__msg}>New</p>;
    } else if (e === "end") {
      return <p className={style.imageContainer__msg}>Completo</p>;
    }
  };

  return (
    <Image>
      <p className={style.imageContainer__chapter}>Chapter 101</p>
      <div
        className={`${style.imageContainer__state} ${
          hoy <= pub ? style.imageContainer__new : ""
        } ${dato.e === "end" ? style.imageContainer__end : ""}`}
      >
        {/* {hoy <= pub ? <p>New</p> : <p>Completo</p>} */}
        {handleState(dato)}
      </div>
    </Image>
  );
};

export default CardImage;
