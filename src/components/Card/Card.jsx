import Folder from "../Folder/Folder";
import FolderData from "../FolderData/FolderData";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <Folder />
      <FolderData />
    </div>
  );
};

export default Card;
