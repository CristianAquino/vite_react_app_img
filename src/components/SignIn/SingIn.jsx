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
  const [unlockPassword, setUnLockPassword] = useChangeIcon();
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
        <span className={`tag24bold ${style["tag24bold--var"]}`}>
          iniciar sesion
        </span>
        <Link className="tag12regular link" to={"/"}>
          ir al inicio
        </Link>
      </div>
      <Logo />
      <div className={style.sesion__body}>
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
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
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.form__container}>
            <span className={`tag16bold ${style["tag16bold--var"]}`}>
              Ingrese su contraseña
            </span>
            <div className={style.inputPassSingIn}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type={unlockPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {unlockPassword ? (
                <BiShow
                  onClick={setUnLockPassword}
                  className={`icon ${style.icon} ${style["icon--right"]} `}
                />
              ) : (
                <BiHide
                  onClick={setUnLockPassword}
                  className={`icon ${style.icon} ${style["icon--right"]} ${style["icon--off"]}`}
                />
              )}
            </div>
          </div>
          <button
            className={`form__button boton14medium ${style["boton14medium--var"]}`}
          >
            iniciar sesion
          </button>
        </form>
      </div>
      <div className={style.sesion__footer}>
        <Link className={`boton14medium link`} to={"/"}>
          ¿Olvidaste tu contraseña?
        </Link>
        <Link className={`boton14medium link`} to={"/register"}>
          ¿No tienes una cuenta? Cree una ahora.
        </Link>
      </div>
    </div>
  );
};
