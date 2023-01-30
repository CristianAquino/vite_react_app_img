import style from "../SignIn/SingIn.module.css";
import stProfile from "./Profile.module.css";
import { BiLock, BiEnvelope, BiUser, BiEdit } from "react-icons/bi";
import { TbCameraPlus } from "react-icons/tb";
import Image from "../CardImage/Image";

import { IconContext } from "react-icons";
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
      <div className={style.sesion__headS}>
        <span className={style.sesion__title}>Perfil de usuario</span>
      </div>
      <div className={style.sesion__body}>
        <div className={stProfile.changeImage}>
          <Image dimension={sizeImage} />
          <p className={stProfile.changeImage__iconContainer}>
            <TbCameraPlus className={stProfile.icon} />
          </p>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.form__container}>
            <span className={style.form__label}>Nombre de usuario</span>
            <div className={style.form__containerInput}>
              <BiUser
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                ref={refUsername}
                type="text"
                placeholder="username"
                disabled
                className={style.form__input}
              />
              <IconContext.Provider
                value={{
                  style: changeIconUsernameEdit
                    ? ""
                    : { color: "var(--description)" },
                }}
              >
                <BiEdit
                  onClick={LockInputUsername}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              </IconContext.Provider>
            </div>
          </div>
          <div className={style.form__container}>
            <span className={style.form__label}>Correo electronico</span>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                ref={refEmail}
                type="email"
                placeholder="jhondoe@example.com"
                disabled
                className={style.form__input}
              />
              <IconContext.Provider
                value={{
                  style: changeIconEmailEdit
                    ? ""
                    : { color: "var(--description)" },
                }}
              >
                <BiEdit
                  onClick={LockInputEmail}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              </IconContext.Provider>
            </div>
          </div>
          <div className={style.form__container}>
            <span className={style.form__label}>Contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                // type={changeIconPasswordEdit ? "text" : "password"}
                ref={refPassword}
                type="text"
                placeholder="********************"
                disabled
                className={style.form__input}
              />
              <IconContext.Provider
                value={{
                  style: changeIconEmailEdit
                    ? ""
                    : { color: "var(--description)" },
                }}
              >
                <BiEdit
                  onClick={LockInputPassword}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              </IconContext.Provider>
            </div>
          </div>
          <button className={style.form__button}>guardar cambios</button>
        </form>
      </div>
    </div>
  );
};
