import Cards from "../components/Cards/Cards";
import Navigate from "../components/Navigate/Navigate";
import Ranking from "../components/Ranking/Ranking";
import style from "./Principal.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <h1 className="tag24bold">Recientes</h1>
      <Cards />
      <Navigate />
      <h1 className="tag24bold">Ranking</h1>
      <Ranking />
    </div>
  );
};

export default Home;
