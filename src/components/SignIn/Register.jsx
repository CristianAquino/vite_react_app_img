import style from "./SingIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLock, BiEnvelope, BiShow, BiHide, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useChangeIcon } from "../../hooks/useChangeIcon";

export const Register = () => {
  const [lockPassword, setLockPassword] = useChangeIcon();
  const [lockConfirmPassword, setLockConfirmPassword] = useChangeIcon();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className={style.sesion__title}>registro</span>
        <span className={style.sesion__home}>
          <Link className={style.sesion__home__link} to={"/"}>
            ir al inicio
          </Link>
        </span>
      </div>
      <div className={style.sesion__body}>
        <Logo />
        <div className={style.signGoogle}>
          <FcGoogle />
          <span className={style.signGoogle__text}>Sign up with Google</span>
        </div>
        <span className={style.sesion__or}>- or -</span>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={style.form__container}>
            <span className={style.form__label}>Escriba su usuario</span>
            <div className={style.form__containerInput}>
              <BiUser
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type="text"
                placeholder="username"
                className={style.form__input}
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className={style.form__label}>Ingrese su email</span>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type="text"
                placeholder="jhondoe@example.com"
                className={style.form__input}
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className={style.form__label}>Ingrese su contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type={lockPassword ? "text" : "password"}
                placeholder="********************"
                className={style.form__input}
              />
              {lockPassword ? (
                <BiShow
                  onClick={setLockPassword}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setLockPassword}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              )}
            </div>
          </div>
          <div className={style.form__container}>
            <span className={style.form__label}>Confirme su contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type={lockConfirmPassword ? "text" : "password"}
                placeholder="********************"
                className={style.form__input}
              />
              {lockConfirmPassword ? (
                <BiShow
                  onClick={setLockConfirmPassword}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setLockConfirmPassword}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              )}
            </div>
          </div>
          <button className={style.form__button}>registrarse</button>
        </form>
      </div>
      <div className={style.sesion__footer}>
        <span className={style.sesion__footer__text}>
          <Link className={style.sesion__footer__text__link} to={"/login"}>
            ¿Ya tienes una cuenta? Ingresa ahora.
          </Link>
        </span>
      </div>
    </div>
  );
};
