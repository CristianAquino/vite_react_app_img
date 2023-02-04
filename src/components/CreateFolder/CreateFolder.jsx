import Image from "../CardImage/Image";
import style from "./CreateFolder.module.css";
import { HiOutlineIdentification, HiOutlineBookOpen } from "react-icons/hi";
import { BsBrush, BsTag } from "react-icons/bs";
import {
  BiUserCircle,
  BiRadioCircleMarked,
  BiCloudUpload,
} from "react-icons/bi";
import { useTextAreaResize } from "../../hooks/useTextAreaResize";

const CreateFolder = () => {
  const [txtAreaTitle, setTxtAreaTitle, txtAreaTitleRef] = useTextAreaResize();
  const [txtAreaSumary, setTxtAreaSumary, txtAreaSumaryRef] =
    useTextAreaResize();

  const valor = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola");
  };
  const styleContainerImage = {
    cursor: "pointer",
  };

  // const handleChange = (e) => {
  //   setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  return (
    <div className={style.folder}>
      <h1 className={`tag24bold ${style["tag24bold--var"]}`}>Create Folder</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.txtArea}>
          <textarea
            ref={txtAreaTitleRef}
            className={`title32bold ${style.folderTxtArea} ${style["folderTxtArea--title"]}`}
            name="title"
            maxLength={150}
            placeholder="Ingrese el titulo"
            value={txtAreaTitle}
            onChange={(e) => setTxtAreaTitle(e.target.value)}
          />
          <span className={`tag12regular ${style.lengthTxt}`}>
            {txtAreaTitle.length}/150
          </span>
        </div>
        {valor ? (
          <div className={style.content__image}>
            <span className={`title32bold ${style["title32bold--var"]}`}>
              upload image folder
            </span>
            <BiCloudUpload className={`icon ${style["icon--var"]}`} />
          </div>
        ) : (
          <Image styleContainerImage={styleContainerImage} />
        )}
        <div className={style.folder__info}>
          <div className={style.folder__tag}>
            <HiOutlineIdentification className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              other name
            </span>
            <input
              type="text"
              className={`form__input ${style["form__input--var"]}`}
              placeholder="Ingrese otros nombres"
            />
          </div>
          <div className={style.folder__tag}>
            <BiUserCircle className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              author
            </span>
            <input
              type="text"
              className={`form__input ${style["form__input--var"]}`}
              placeholder="Ingrese author"
            />
          </div>
          <div className={style.folder__tag}>
            <BsBrush className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              artist
            </span>
            <input
              type="text"
              className={`form__input ${style["form__input--var"]}`}
              placeholder="Ingrese artist"
            />
          </div>
          <div className={style.folder__tag}>
            <BiRadioCircleMarked className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              status
            </span>
            <input
              type="text"
              className={`form__input ${style["form__input--var"]}`}
              placeholder="Ingrese status"
            />
          </div>
          <div className={style.folder__tag}>
            <BsTag className="icon" />
            <span className={`tag14medium ${style["tag14medium--var"]}`}>
              tags
            </span>
            <input
              type="text"
              className={`form__input ${style["form__input--var"]}`}
              placeholder="Ingrese tags"
            />
          </div>
        </div>
        <div className={style.folderSumary}>
          <div className={style.folderSumary__head}>
            <HiOutlineBookOpen className="icon" />
            <span className={`tag24bold ${style["tag24bold--var"]}`}>
              sumary
            </span>
          </div>
          <div className={style.txtArea}>
            <textarea
              ref={txtAreaSumaryRef}
              className={`description14medium ${style.folderTxtArea} ${style["folderTxtArea--sumary"]}`}
              name="sumary"
              maxLength={150}
              placeholder="Ingrese resumen"
              value={txtAreaSumary}
              onChange={(e) => setTxtAreaSumary(e.target.value)}
            />
            <span className={`tag12regular ${style.lengthTxt}`}>
              {txtAreaSumary.length}/150
            </span>
          </div>
        </div>
        <button
          className={`form__button boton14medium ${style["boton14medium--var"]}`}
        >
          Crear Folder
        </button>
      </form>
    </div>
  );
};

export default CreateFolder;
