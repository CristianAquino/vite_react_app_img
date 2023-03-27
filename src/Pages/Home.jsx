import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards/Cards";
import Navigate from "../components/Navigate/Navigate";
import Ranking from "../components/Ranking/Ranking";
import { chapterSuccess } from "../redux/slices/chapterSlice";
import style from "./Principal.module.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chapterSuccess(null));
  }, []);

  return (
    <div className={style.home}>
      <h1 className={`tag24bold ${style["tag24bold--var"]}`}>Recientes</h1>
      <Cards />
      <Navigate />
      <h1 className={`tag24bold ${style["tag24bold--var"]}`}>Ranking</h1>
      <Ranking />
    </div>
  );
};

export default Home;
