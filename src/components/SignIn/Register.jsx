import style from "./SingIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLock, BiEnvelope, BiShow, BiHide, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export const Register = () => {
  const [lock, setLock] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleLock = () => {
    setLock(!lock);
  };
  const handleConfirm = () => {
    setConfirm(!confirm);
  };

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
        <form className={style.form} onSubmit={handleSubmit}>
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
          <div className={style.form__container}>
            <span className={style.form__label}>Confirme su contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock
                className={`${style.form__icon} ${style["form__icon-left"]}`}
              />
              <input
                type={confirm ? "text" : "password"}
                placeholder="********************"
                className={style.form__input}
              />
              {confirm ? (
                <BiShow
                  onClick={handleConfirm}
                  className={`${style.form__icon} ${style["form__icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={handleConfirm}
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
          <Link className={style.sesion__footer__text__link} to={"/"}>
            ¿Ya tienes una cuenta? Ingresa ahora.
          </Link>
        </span>
      </div>
    </div>
  );
};
