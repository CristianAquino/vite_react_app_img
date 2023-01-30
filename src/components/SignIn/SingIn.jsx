import style from "./SingIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLock, BiEnvelope, BiShow, BiHide } from "react-icons/bi";
import { useEffect, useState } from "react";
import { signin } from "../../https/authRequests";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { useChangeIcon } from "../../hooks/useChangeIcon";

const initial = {
  email: "",
  password: "",
};

export const SingIn = () => {
  const [form, setForm] = useState(initial);
  const [lockPassword, setLockPassword] = useChangeIcon();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector((state) => state.authSlice);

  const handleLogin = () => {
    signin(form)
      .then((res) => dispatch(loginSuccess(res)))
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
    }
  }, [isLogged]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
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
                name="email"
                value={form.email}
                onChange={handleChange}
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
                type={lockPassword ? "text" : "password"}
                placeholder="********************"
                className={style.form__input}
                name="password"
                value={form.password}
                onChange={handleChange}
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
          <Link className={style.sesion__footer__text__link} to={"/register"}>
            ¿No tienes una cuenta? Cree una ahora.
          </Link>
        </span>
      </div>
    </div>
  );
};
