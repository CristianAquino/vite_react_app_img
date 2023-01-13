import Cards from "../components/Cards/Cards";
import style from "./Principal.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <h1>Recientes</h1>
      <Cards />
    </div>
  );
};

export default Home;
