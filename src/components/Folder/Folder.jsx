import { useState } from "react";
import style from "./Folder.module.css";
import Image from "./Image";

const Folder = () => {
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
      return <p>New</p>;
    } else if (e === "end") {
      return <p>Completo</p>;
    }
  };
  return (
    <Image>
      <p className={style.chapter}>Chapter 101</p>
      <div
        className={`${style.state} ${hoy <= pub ? style.new : ""} ${
          dato.e === "end" ? style.end : ""
        }`}
      >
        {/* {hoy <= pub ? <p>New</p> : <p>Completo</p>} */}
        {handleState(dato)}
      </div>
    </Image>
  );
};

export default Folder;
