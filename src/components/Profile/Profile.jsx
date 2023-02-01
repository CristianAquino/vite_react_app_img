import style from "../SignIn/SingIn.module.css";
import stProfile from "./Profile.module.css";
import { BiLock, BiEnvelope, BiUser, BiEdit } from "react-icons/bi";
import { TbCameraPlus } from "react-icons/tb";
import Image from "../CardImage/Image";

import { useEditInput } from "../../hooks/useEditInput";

export const Profile = () => {
  const [changeIconUsernameEdit, refUsername, LockInputUsername] =
    useEditInput();
  const [changeIconEmailEdit, refEmail, LockInputEmail] = useEditInput();
  const [changeIconPasswordEdit, refPassword, LockInputPassword] =
    useEditInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  const sizeImage = {
    width: "192px",
    height: "192px",
    borderRadius: "50%",
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className="tag24bold">Perfil de usuario</span>
      </div>
      <div className={stProfile.profile__body}>
        <div className={stProfile.changeImage}>
          <Image dimension={sizeImage} />
          <p className={stProfile.changeImage__iconContainer}>
            <TbCameraPlus className={`icon ${style.icon} `} />
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form__container}>
            <span className="tag16bold">Nombre de usuario</span>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                ref={refUsername}
                type="text"
                placeholder="username"
                disabled
                className="form__input"
              />
              <BiEdit
                onClick={LockInputUsername}
                className={`icon ${style.icon} ${style["icon--right"]} ${
                  changeIconUsernameEdit ? "" : `${style["icon--off"]}`
                }`}
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className="tag16bold">Correo electronico</span>
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
              <BiEdit
                onClick={LockInputEmail}
                className={`icon ${style.icon} ${style["icon--right"]} ${
                  changeIconEmailEdit ? "" : `${style["icon--off"]}`
                }`}
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className="tag16bold">Contraseña</span>
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
              <BiEdit
                onClick={LockInputPassword}
                className={`icon ${style.icon} ${style["icon--right"]}  ${
                  changeIconPasswordEdit ? "" : `${style["icon--off"]}`
                }`}
              />
            </div>
          </div>
          <button className="form__button boton14medium">
            guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};
