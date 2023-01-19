import style from "./SingIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLock, BiEnvelope, BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";

export const SingIn = () => {
  const [lock, setLock] = useState(false);

  const handleLock = () => {
    setLock(!lock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <span className={style.sesion__title}>iniciar sesion</span>
        <span className={style.sesion__home}>
          <Link className={style.sesion__home__link} to={"/"}>
            ir al inicio
          </Link>
        </span>
      </div>
      <div className={style.sesion__body}>
        <Logo />
        <form className={style.form} onSubmit={handleSubmit}>
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
            <div className={style.inputPassSingIn}>
              <BiLock
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type={lock ? "text" : "password"}
                placeholder="********************"
                className={style.form__input}
              />
              {lock ? (
                <BiShow
                  onClick={handleLock}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={handleLock}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              )}
            </div>
          </div>
          <button className={style.form__button}>iniciar sesion</button>
        </form>
      </div>
      <div className={style.sesion__footer}>
        <span className={style.sesion__footer__text}>
          <Link className={style.sesion__footer__text__link} to={"/"}>
            ¿Olvidaste tu contraseña?
          </Link>
        </span>
        <span className={style.sesion__footer__text}>
          <Link className={style.sesion__footer__text__link} to={"/"}>
            ¿No tienes una cuenta? Cree una ahora.
          </Link>
        </span>
      </div>
    </div>
  );
};
