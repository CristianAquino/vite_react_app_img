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
    <div className={style.signIn}>
      <div className={style.headSingIn}>
        <span className={style.titleSignIn}>registro</span>
        <span className={style.goHome}>
          <Link to={"/"}>ir al inicio</Link>
        </span>
      </div>
      <div className={style.bodySignIn}>
        <Logo />
        <div className={style.google}>
          <FcGoogle />
          <span>Sign up with Google</span>
        </div>
        <span className={style.option}>- or -</span>

        <form className={style.formSingIn} onSubmit={handleSubmit}>
          <div>
            <span>Escriba su usuario</span>
            <div className={style.inputEmailSingIn}>
              <BiUser />
              <input type="text" placeholder="username" />
            </div>
          </div>
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
          <div>
            <span>Confirme su contraseña</span>
            <div className={style.inputPassSingIn}>
              <BiLock />
              <input
                type={confirm ? "text" : "password"}
                placeholder="********************"
              />
              {confirm ? (
                <BiShow onClick={handleConfirm} />
              ) : (
                <BiHide onClick={handleConfirm} />
              )}
            </div>
          </div>
          <button className={style.buttonSingIn}>registrarse</button>
        </form>
      </div>
      <div className={style.footerSingIn}>
        <span>
          <Link to={"/"}>¿Ya tienes una cuenta? Ingresa ahora.</Link>
        </span>
      </div>
    </div>
  );
};
