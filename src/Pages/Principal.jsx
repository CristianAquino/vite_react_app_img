import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import style from "./Principal.module.css";

const Principal = () => {
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.container__main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Principal;
