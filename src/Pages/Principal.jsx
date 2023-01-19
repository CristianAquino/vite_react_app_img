import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import styles from "./Principal.module.css";

const Principal = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Principal;
