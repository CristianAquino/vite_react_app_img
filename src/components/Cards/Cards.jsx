import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allfolders } from "../../https/folderRequest";
import { folderSuccess } from "../../redux/slices/folderSlice";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const { folders } = useSelector((state) => state.folderSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    allfolders().then((res) => dispatch(folderSuccess(res)));
  }, []);

  if (!folders || folders.length === undefined)
    return (
      <span
        className={`description14medium ${style["description14medium--var"]}`}
      >
        Loading...
      </span>
    );

  return (
    <div className={style.cards}>
      {folders?.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Cards;
