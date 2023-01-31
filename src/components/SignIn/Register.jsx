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
        <span className="tag24bold">registro</span>
        <Link className="tag12regular link" to={"/"}>
          ir al inicio
        </Link>
      </div>
      <Logo />
      <div className={style.signGoogle}>
        <FcGoogle />
        <span className={style.signGoogle__text}>Sign up with Google</span>
      </div>
      <span className="tag24bold">- or -</span>
      <div className={style.sesion__body}>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={style.form__container}>
            <span className="tag16bold">Escriba su usuario</span>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon-left"]}`} />
              <input
                type="text"
                placeholder="username"
                className="form__input"
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className="tag16bold">Ingrese su email</span>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`icon ${style.icon} ${style["icon-left"]}`}
              />
              <input
                type="text"
                placeholder="jhondoe@example.com"
                className="form__input"
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className="tag16bold">Ingrese su contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon-left"]}`} />
              <input
                type={lockPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
              />
              {lockPassword ? (
                <BiShow
                  onClick={setLockPassword}
                  className={`icon ${style.icon} ${style["icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setLockPassword}
                  className={`icon ${style.icon} ${style["icon-right"]}`}
                />
              )}
            </div>
          </div>
          <div className={style.form__container}>
            <span className="tag16bold">Confirme su contraseña</span>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon-left"]}`} />
              <input
                type={lockConfirmPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
              />
              {lockConfirmPassword ? (
                <BiShow
                  onClick={setLockConfirmPassword}
                  className={`icon ${style.icon} ${style["icon-right"]}`}
                />
              ) : (
                <BiHide
                  onClick={setLockConfirmPassword}
                  className={`icon ${style.icon} ${style["icon-right"]}`}
                />
              )}
            </div>
          </div>
          <button className="form__button  boton14medium">registrarse</button>
        </form>
      </div>
      <div className={style.sesion__footer}>
        <Link
          className={`boton14medium ${style.boton14medium} link`}
          to={"/login"}
        >
          ¿Ya tienes una cuenta? Ingresa ahora.
        </Link>
      </div>
    </div>
  );
};
