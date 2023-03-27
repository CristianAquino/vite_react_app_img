import style from "../SignIn/SingIn.module.css";
import stProfile from "./Profile.module.css";
import { BiLock, BiEnvelope, BiUser } from "react-icons/bi";
import { TbCameraPlus, TbEdit, TbEditOff } from "react-icons/tb";
import Image from "../CardImage/Image";

import { useEditInput } from "../../hooks/useEditInput";
import Avatar from "../Avatar/Avatar";
import { useSelector } from "react-redux";

export const Profile = () => {
  const [changeIconUsernameEdit, refUsername, LockInputUsername] =
    useEditInput();
  const [changeIconEmailEdit, refEmail, LockInputEmail] = useEditInput();
  const [changeIconPasswordEdit, refPassword, LockInputPassword] =
    useEditInput();

  const { user } = useSelector((state) => state.userSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  const styleContainerImage = {
    width: "192px",
    height: "192px",
    borderRadius: "50%",
  };

  const styleTagImage = {
    objectFit: "cover",
    objectPosition: "center",
  };

  const styleAvatar = {
    fontSize: "50px",
    backgroundColor: `${user.avatar.bg}`,
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className={`tag24bold ${style["tag24bold--var"]}`}>
          Perfil de usuario
        </span>
      </div>
      <div className={stProfile.profile__body}>
        <div className={stProfile.changeImage}>
          {user.urlAvatar ? (
            <Image
              styleContainerImage={styleContainerImage}
              styleTagImage={styleTagImage}
              url={user.urlAvatar}
            />
          ) : (
            <Avatar styleAvatar={styleAvatar} name={user.username} />
          )}
          <p className={stProfile.changeImage__iconContainer}>
            <TbCameraPlus className={`icon ${style.icon} `} />
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Nombre de usuario
            </p>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                ref={refUsername}
                type="text"
                placeholder="username"
                disabled
                className="form__input"
              />
              {changeIconUsernameEdit ? (
                <TbEditOff
                  onClick={LockInputUsername}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              ) : (
                <TbEdit
                  onClick={LockInputUsername}
                  className={`icon ${style.icon} ${style["icon--right"]}`}
                />
              )}
            </div>
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Correo electronico
            </p>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`icon ${style.icon} ${style["icon--left"]}`}
              />
              <input
                ref={refEmail}
                type="email"
                placeholder="jhondoe@example.com"
                disabled
                className="form__input"
              />
              {changeIconEmailEdit ? (
                <TbEditOff
                  onClick={LockInputEmail}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              ) : (
                <TbEdit
                  onClick={LockInputEmail}
                  className={`icon ${style.icon} ${style["icon--right"]}`}
                />
              )}
            </div>
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Contraseña
            </p>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                // type={changeIconPasswordEdit ? "text" : "password"}
                ref={refPassword}
                type="text"
                placeholder="********************"
                disabled
                className="form__input"
              />
              {changeIconPasswordEdit ? (
                <TbEditOff
                  onClick={LockInputPassword}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              ) : (
                <TbEdit
                  onClick={LockInputPassword}
                  className={`icon ${style.icon} ${style["icon--right"]}`}
                />
              )}
            </div>
          </div>
          <button
            className={`form__button boton14medium ${style["boton14medium--var"]}`}
          >
            guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};
