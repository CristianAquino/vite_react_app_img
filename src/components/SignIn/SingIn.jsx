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
    <div className={style.signIn}>
      <div className={style.headSingIn}>
        <span className={style.titleSignIn}>iniciar sesion</span>
        <span className={style.goHome}>
          <Link to={"/"}>ir al inicio</Link>
        </span>
      </div>
      <div className={style.bodySignIn}>
        <Logo />
        <form className={style.formSingIn} onSubmit={handleSubmit}>
          <div>
            <span>Ingrese su email</span>
            <div className={style.inputEmailSingIn}>
              <BiEnvelope />
              <input type="text" placeholder="jhondoe@example.com" />
            </div>
          </div>
          <div>
            <span>Ingrese su contraseña</span>
            <div className={style.inputPassSingIn}>
              <BiLock />
              <input
                type={lock ? "text" : "password"}
                placeholder="********************"
              />
              {lock ? (
                <BiShow onClick={handleLock} />
              ) : (
                <BiHide onClick={handleLock} />
              )}
            </div>
          </div>
          <button className={style.buttonSingIn}>iniciar sesion</button>
        </form>
      </div>
      <div className={style.footerSingIn}>
        <span>
          <Link to={"/"}>¿Olvidaste tu contraseña?</Link>
        </span>
        <span>
          <Link to={"/"}>¿No tienes una cuenta? Cree una ahora.</Link>
        </span>
      </div>
    </div>
  );
};
