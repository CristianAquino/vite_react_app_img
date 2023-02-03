import style from "../SignIn/SingIn.module.css";
import stProfile from "./Profile.module.css";
import { BiLock, BiEnvelope, BiUser } from "react-icons/bi";
import { TbCameraPlus, TbEdit, TbEditOff } from "react-icons/tb";
import Image from "../CardImage/Image";

import { useEditInput } from "../../hooks/useEditInput";
import Avatar from "../Avatar/Avatar";

export const Profile = () => {
  const [changeIconUsernameEdit, refUsername, LockInputUsername] =
    useEditInput();
  const [changeIconEmailEdit, refEmail, LockInputEmail] = useEditInput();
  const [changeIconPasswordEdit, refPassword, LockInputPassword] =
    useEditInput();

  const value = true;

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

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className={`tag24bold ${style["tag24bold--var"]}`}>
          Perfil de usuario
        </span>
      </div>
      <div className={stProfile.profile__body}>
        <div className={stProfile.changeImage}>
          {value ? (
            <Image
              styleContainerImage={styleContainerImage}
              styleTagImage={styleTagImage}
            />
          ) : (
            <Avatar />
          )}
          <p className={stProfile.changeImage__iconContainer}>
            <TbCameraPlus className={`icon ${style.icon} `} />
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Nombre de usuario
            </span>
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
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Correo electronico
            </span>
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
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Contraseña
            </span>
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
