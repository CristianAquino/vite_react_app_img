// style
import style from "./ViewImage.module.css";
// icons
import {
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineUpCircle,
} from "react-icons/ai";
// react-router-dom
import { Link, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ViewContent = () => {
  const params = useParams();
  const { chapters } = useSelector((state) => state.chapterSlice);
  const chapter = chapters?.chapters.findIndex(
    (chapter) => chapter.name === params.chapterName
  );
  const [navigate, setNavigate] = useState(chapter);

  useEffect(() => {
    setNavigate(chapter);
  }, [params]);

  return (
    <div className={style.view}>
      <div className={`title32bold ${style["title32bold--var"]}`}>
        {chapters?.foldername}
      </div>
      <div className={style.view__controls}>
        <Link to={"/home"}>
          <AiOutlineHome className="icon" />
        </Link>
        <Link to={`/folder/${params.folderName}`}>
          <AiOutlineUpCircle className="icon" />
        </Link>
        <div className={style.view__container__select}>
          {navigate < chapters?.chapters.length - 1 && (
            <div
              className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
            >
              <Link to={`${chapters?.chapters[navigate + 1].name}`}>
                <AiOutlineLeft />
              </Link>
            </div>
          )}
          <select name="" className={style.view__select}>
            <option value="3">Chapter 3</option>
            <option value="2">Chapter 2</option>
            <option value="1">Chapter 1</option>
          </select>
          {navigate - 1 >= 0 && (
            <div
              className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
            >
              <Link to={`${chapters?.chapters[navigate - 1].name}`}>
                <AiOutlineRight />
              </Link>
            </div>
          )}
        </div>
        <AiOutlineLike className="icon" />
      </div>
      <Outlet />
      <div className={style.view__footer}>
        <div className={style.view__container__select}>
          {navigate < chapters?.chapters.length - 1 && (
            <div
              className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
            >
              <Link to={`${chapters?.chapters[navigate + 1].name}`}>
                <AiOutlineLeft />
              </Link>
            </div>
          )}
          <select name="" className={style.view__select}>
            <option value="3">Chapter 3</option>
            <option value="2">Chapter 2</option>
            <option value="1">Chapter 1</option>
          </select>
          {navigate - 1 >= 0 && (
            <div
              className={`tag14medium ${style["tag14medium--var"]} ${style.view__arrow}`}
            >
              <Link to={`${chapters?.chapters[navigate - 1].name}`}>
                <AiOutlineRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewContent;
