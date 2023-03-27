// react
import { useEffect, useState } from "react";
// style
import style from "./Folder.module.css";
// icons
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiFillLike,
} from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import { HiOutlineIdentification, HiOutlineBookOpen } from "react-icons/hi";
import { BsBrush, BsTag } from "react-icons/bs";
import { BiUserCircle, BiRadioCircleMarked } from "react-icons/bi";
import { IoHeartCircleOutline } from "react-icons/io5";
// components
import Image from "../CardImage/Image";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// http
import { chapterwithfolderId } from "../../https/chapterRequest";
import { folderName } from "../../https/folderRequest";
// redux
import { useDispatch, useSelector } from "react-redux";
import { folderSuccess } from "../../redux/slices/folderSlice";
import { chapterSuccess } from "../../redux/slices/chapterSlice";

const Folder = () => {
  const params = useParams();
  const { folders } = useSelector((state) => state.folderSlice);
  const { user } = useSelector((state) => state.userSlice);
  const { isLogged } = useSelector((state) => state.authSlice);
  const { chapters } = useSelector((state) => state.chapterSlice);
  const folder = folders?.length
    ? folders.find((folder) => folder.title === params.folderName)
    : folders;
  const [liked, setLiked] = useState(folder?.follow.includes(`${user?.id}`));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!folders) {
      folderName(params.folderName).then((res) => dispatch(folderSuccess(res)));
    }
  }, []);

  useEffect(() => {
    chapterwithfolderId(params.folderName).then((res) => {
      dispatch(chapterSuccess(res));
    });
  }, []);

  const handleLike = () => {
    setLiked((prev) => !prev);
    console.log("le diste like o dislike");
  };

  if (!folder) return <p>Loading....</p>;

  return (
    <div className={style.folder}>
      <div className={`title32bold ${style["title32bold--var"]}`}>
        {folder.title}
      </div>
      <div className={style.folder__body}>
        <Image url={folder.img} />
        {isLogged && (
          <div>
            <AiFillStar className={style.iconStar} />
            <AiFillStar className={style.iconStar} />
            <AiFillStar className={style.iconStar} />
            <AiFillStar className={style.iconStar} />
            <AiFillStar className={style.iconStar} />
          </div>
        )}
        <div className={style.folder__info}>
          <div className={style.folder__tag}>
            <GiAlliedStar className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              Ranking
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              average {folder.ranking}
            </span>
          </div>
          <div className={style.folder__tag}>
            <HiOutlineIdentification className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              other name
            </span>
            <div>
              <span className={`tag14medium ${style["tag14medium--var"]}`}>
                {folder.otherNames.join(", ")}
              </span>
            </div>
          </div>
          <div className={style.folder__tag}>
            <BiUserCircle className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              author
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              {folder.author}
            </span>
          </div>
          <div className={style.folder__tag}>
            <BsBrush className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              artist
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              {folder.artist}
            </span>
          </div>
          <div className={style.folder__tag}>
            <BiRadioCircleMarked className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              status
            </span>
            {folder.status == 0 ? (
              <span
                className={`tag14medium ${style["tag14medium--var"]} ${style["tag14medium--var__colorG"]}`}
              >
                on going
              </span>
            ) : (
              <span
                className={`tag14medium ${style["tag14medium--var"]} ${style["tag14medium--var__colorE"]}`}
              >
                terminado
              </span>
            )}
          </div>
          <div className={style.folder__tag}>
            <BsTag className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              tags
            </span>
            <div>
              <span className={`tag14medium ${style["tag14medium--var"]}`}>
                {folder.tags.join(", ")}
              </span>
            </div>
          </div>
          <div className={style.folder__tag}>
            <AiOutlineEye className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              view
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              {folder.views}
            </span>
          </div>
          <div className={style.folder__tag}>
            <IoHeartCircleOutline className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              follow
            </span>
            {isLogged ? (
              <AiFillLike
                className={`${style.iconFollow} ${liked && style.iconFollowT}`}
                onClick={handleLike}
              />
            ) : (
              <span className={`tag14medium ${style["tag14medium--var"]}`}>
                {folder.follow.length}
              </span>
            )}
          </div>
        </div>
        <div className={style.folderSumary}>
          <div className={style.folderSumary__head}>
            <HiOutlineBookOpen className="icon" />
            <span className={`tag24bold ${style["tag24bold--var"]}`}>
              sumary
            </span>
          </div>
          <span
            className={`description14medium ${style["description14medium--var"]}`}
          >
            {folder.sumary}
          </span>
        </div>
      </div>
      <div className={style.folderChapter}>
        <div className={style.folderChapter__head}>
          <AiOutlineUnorderedList className="icon" />
          <span className={`tag24bold ${style["tag24bold--var"]}`}>
            chapters
          </span>
        </div>
        {!chapters && (
          <span
            className={`description14medium ${style["description14medium--var"]}`}
          >
            Loading...
          </span>
        )}
        {chapters?.chapters.map((chapter) => (
          <div key={chapter.id} className={style.folder__ch}>
            <Link to={`/view/${folder.title}/${chapter.name}`} className="link">
              <span className={`tag16medium ${style["tag16medium--var"]}`}>
                {chapter.name}
              </span>
            </Link>
            <AiOutlineHeart
              className={`${style.iconLike} ${style["icon--var"]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
