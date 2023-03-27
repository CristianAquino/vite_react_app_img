import { useEffect } from "react";
// style
import style from "./SingIn.module.css";
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// component
import Logo from "../Logo/Logo";
// icons
import { BiLock, BiEnvelope, BiShow, BiHide } from "react-icons/bi";
// http
import { signin } from "../../https/authRequests";
// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  authStart,
  loginSuccess,
  authFail,
} from "../../redux/slices/authSlice";
import { userSuccess } from "../../redux/slices/userSlice";
// hook
import { useChangeIcon } from "../../hooks/useChangeIcon";
// react-hook-form
import { useForm } from "react-hook-form";

export const SingIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [unlockPassword, setUnLockPassword] = useChangeIcon();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged, error, message, loading } = useSelector(
    (state) => state.authSlice
  );

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
    }
  }, [isLogged]);

  const onSubmit = (datos) => {
    handleLogin(datos);
  };

  const handleLogin = async (datos) => {
    dispatch(authStart());
    try {
      const res = await signin(datos);
      dispatch(loginSuccess(res.token));
      dispatch(userSuccess(res.user));
    } catch (e) {
      dispatch(authFail(e.response.data));
    }
  };

  // const handleChange = (e) => {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // if (loading) {
  //   return <h1 style={{ minHeight: "100vh" }}>Cargando...</h1>;
  // }

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <h1 className={`tag24bold ${style["tag24bold--var"]}`}>
          iniciar sesion
        </h1>
        <Link className="tag12regular link" to={"/"}>
          ir al inicio
        </Link>
      </div>
      <Logo />
      <div className={style.sesion__body}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={style.form}
          autoComplete="off"
        >
          <div className={`${style.form__container} `}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Ingrese su email
            </p>
            <div className={style.form__containerInput}>
              <BiEnvelope
                className={`icon ${style.icon} ${style["icon--left"]}`}
              />
              <input
                type="email"
                placeholder="jhondoe@example.com"
                className="form__input"
                {...register("email", {
                  required: "*Este campo es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
                    message: "Debe ingresar un email valido",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="danger">{errors.email?.message}</span>
            )}
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Ingrese su contraseña
            </p>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type={unlockPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
                {...register("password", {
                  required: "*Este campo es requerido",
                })}
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
            {errors.password && (
              <span className="danger">{errors.password?.message}</span>
            )}
          </div>
          {error && <span className="danger">{message}</span>}
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
