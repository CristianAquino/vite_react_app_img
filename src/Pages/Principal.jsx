import { Outlet } from "react-router-dom";
import Navigate from "../components/Navigate/Navigate";
import styles from "./Principal.module.css";

const Principal = () => {
  return (
    <div className={styles.principal}>
      <Navigate />
      <Outlet />
    </div>
  );
};

export default Principal;
