import { useEffect, useState } from "react";
import style from "./Avatar.module.css";
const Avatar = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const numeros = "0123456789abcdef";
    const longitud = 6;
    let initial = "";
    for (let i = 0; i < longitud; i++) {
      let random = Math.floor(Math.random() * numeros.length);
      initial += numeros.substring(random, random + 1);
    }
    setColor("#" + initial);
  }, []);

  return (
    <div className={style.avatar} style={{ backgroundColor: color }}>
      C
    </div>
  );
};

export default Avatar;
