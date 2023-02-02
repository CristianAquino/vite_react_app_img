import style from "./SingIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLock, BiEnvelope, BiShow, BiHide, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useChangeIcon } from "../../hooks/useChangeIcon";

export const Register = () => {
  const [unlockPassword, setUnLockPassword] = useChangeIcon();
  const [unlockConfirmPassword, setUnLockConfirmPassword] = useChangeIcon();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className={`tag24bold ${style["tag24bold--var"]}`}>registro</span>
        <Link className="tag12regular link" to={"/"}>
          ir al inicio
        </Link>
      </div>
      <Logo />
      <div className={style.signGoogle}>
        <FcGoogle />
        <span className={style.signGoogle__text}>Sign up with Google</span>
      </div>
      <span className={`tag24bold ${style["tag24bold--var"]}`}>- or -</span>
      <div className={style.sesion__body}>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Escriba su usuario
            </span>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type="text"
                placeholder="username"
                className="form__input"
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Ingrese su email
            </span>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`icon ${style.icon} ${style["icon--left"]}`}
              />
              <input
                type="text"
                placeholder="jhondoe@example.com"
                className="form__input"
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Ingrese su contraseña
            </span>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type={unlockPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
              />
              {unlockPassword ? (
                <BiShow
                  onClick={setUnLockPassword}
                  className={`icon ${style.icon} ${style["icon--right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setUnLockPassword}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              )}
            </div>
          </div>
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Confirme su contraseña
            </span>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type={unlockConfirmPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
              />
              {unlockConfirmPassword ? (
                <BiShow
                  onClick={setUnLockConfirmPassword}
                  className={`icon ${style.icon} ${style["icon--right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setUnLockConfirmPassword}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              )}
            </div>
          </div>
          <button
            className={`form__button boton14medium ${style["boton14medium--var"]}`}
          >
            registrarse
          </button>
        </form>
      </div>
      <div className={style.sesion__footer}>
        <Link className={`boton14medium link`} to={"/login"}>
          ¿Ya tienes una cuenta? Ingresa ahora.
        </Link>
      </div>
    </div>
  );
};
