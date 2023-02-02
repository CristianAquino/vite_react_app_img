import Image from "../CardImage/Image";
import style from "./Folder.module.css";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineLike,
  AiOutlineHeart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import { HiOutlineIdentification, HiOutlineBookOpen } from "react-icons/hi";
import { BsBrush, BsTag } from "react-icons/bs";
import { BiUserCircle, BiRadioCircleMarked } from "react-icons/bi";
import { IoHeartCircleOutline } from "react-icons/io5";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Folder = () => {
  return (
    <div className={style.folder}>
      <div className={`title32bold ${style["title32bold--var"]}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad.
      </div>
      <div className={style.folder__body}>
        <Image />
        <div>
          <AiFillStar className={style.iconStar} />
          <AiFillStar className={style.iconStar} />
          <AiFillStar className={style.iconStar} />
          <AiFillStar className={style.iconStar} />
          <AiFillStar className={style.iconStar} />
        </div>
        <div className={style.folder__info}>
          <div className={style.folder__tag}>
            <GiAlliedStar className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              Ranking
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              average 4.5
            </span>
          </div>
          <div className={style.folder__tag}>
            <HiOutlineIdentification className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              other name
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              text
            </span>
          </div>
          <div className={style.folder__tag}>
            <BiUserCircle className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              author
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              author
            </span>
          </div>
          <div className={style.folder__tag}>
            <BsBrush className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              artist
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              artist
            </span>
          </div>
          <div className={style.folder__tag}>
            <BiRadioCircleMarked className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              status
            </span>
            <span
              className={`tag14medium ${style["tag14medium--var"]} ${style["tag14medium--var__color"]}`}
            >
              on going
            </span>
          </div>
          <div className={style.folder__tag}>
            <BsTag className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              tags
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              tags
            </span>
          </div>
          <div className={style.folder__tag}>
            <AiOutlineEye className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              view
            </span>
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              123213213
            </span>
          </div>
          <div className={style.folder__tag}>
            <IoHeartCircleOutline className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              follow
            </span>
            <AiOutlineLike className={style.iconFollow} />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            error, quis laudantium fugiat iste velit, recusandae nam eius
            eveniet quam eos at in! Recusandae ullam aperiam quo quis porro
            expedita, accusamus eligendi perferendis at delectus! Perspiciatis
            tempora, in earum recusandae eos magni quos ratione numquam,
            debitis, eligendi maiores vero. Aliquid..
          </span>
        </div>
      </div>
      <div className={style.folderChapter}>
        <div className={style.folderChapter__head}>
          <AiOutlineUnorderedList className="icon" />
          <span className={`tag24bold ${style["tag24bold--var"]}`}>
            chapters
          </span>
          <CgArrowsExchangeAltV className={`icon ${style["icon--cursor"]}`} />
        </div>
        <div className={style.folder__ch}>
          <span className={`tag16medium ${style["tag16medium--var"]}`}>
            chapter 2
          </span>
          <AiOutlineHeart
            className={`${style.iconLike} ${style["icon--var"]}`}
          />
        </div>
        <div className={style.folder__ch}>
          <span className={`tag16medium ${style["tag16medium--var"]}`}>
            chapter 1
          </span>
          <AiOutlineHeart
            className={`${style.iconLike} ${style["icon--var"]}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;
