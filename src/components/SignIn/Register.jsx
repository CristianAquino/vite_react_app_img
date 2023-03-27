// react
import { useEffect, useState } from "react";
// style
import style from "./SingIn.module.css";
// component
import Logo from "../Logo/Logo";
// icons
import { BiLock, BiEnvelope, BiShow, BiHide, BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// hook
import { useChangeIcon } from "../../hooks/useChangeIcon";
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// react-hook-form
import { useForm } from "react-hook-form";
// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  authStart,
  loginSuccess,
  authFail,
} from "../../redux/slices/authSlice";
import { userSuccess } from "../../redux/slices/userSlice";
// http
import { signup } from "../../https/authRequests";

export const Register = () => {
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },

    setError,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [color, setColor] = useState("");
  const [unlockPassword, setUnLockPassword] = useChangeIcon();
  const [unlockConfirmPassword, setUnLockConfirmPassword] = useChangeIcon();
  // redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, error, message, loading } = useSelector(
    (state) => state.authSlice
  );

  useEffect(() => {
    const numeros = "0123456789abcdef";
    const longitud = 6;
    let initial = "";
    for (let i = 0; i < longitud; i++) {
      let random = Math.floor(Math.random() * numeros.length);
      initial += numeros.substring(random, random + 1);
    }
    setColor("#" + initial);
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/", { replace: true });
    }
  }, [isLogged]);

  const onSubmit = (datos) => {
    handleRegister(datos);
  };

  const handleRegister = async (datos) => {
    // color debe destrucutararse para guardarse correctamente
    datos.color = color;
    if (datos.password === datos.confirmPassword) {
      dispatch(authStart());
      const { confirmPassword, ...data } = datos;
      try {
        const { token, user } = await signup(data);
        dispatch(loginSuccess(token));
        dispatch(userSuccess(user));
      } catch (e) {
        dispatch(authFail(e.response.data));
      }
    } else {
      setError("confirmPassword", {
        type: "custom",
        message: "no hay coincidencia en esta contraseña",
      });
    }
  };

  return (
    <div className={style.sesion}>
      <div className={style.sesion__head}>
        <h1 className={`tag24bold ${style["tag24bold--var"]}`}>registro</h1>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={style.form}
          autoComplete="off"
        >
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Escriba su nombre
            </p>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type="text"
                placeholder="firstname"
                className="form__input"
                {...register("firstname", {
                  required: "*Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "debe ingresar al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "debe ingresar menos de 16 caracteres",
                  },
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "Solo puede ingresar letras",
                  },
                })}
              />
            </div>
            {errors.firstname && (
              <span className="danger">{errors.firstname?.message}</span>
            )}
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Escriba sus apellidos
            </p>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type="text"
                placeholder="lastname"
                className="form__input"
                {...register("lastname", {
                  required: "*Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "debe ingresar al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "debe ingresar menos de 16 caracteres",
                  },
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "Solo puede ingresar letras",
                  },
                })}
              />
            </div>
            {errors.lastname && (
              <span className="danger">{errors.lastname?.message}</span>
            )}
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Escriba su usuario
            </p>
            <div className={style.form__containerInput}>
              <BiUser className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type="text"
                placeholder="username"
                className="form__input"
                {...register("username", {
                  required: "*Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "debe ingresar al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "debe ingresar menos de 16 caracteres",
                  },
                  pattern: {
                    value: /[a-zA-Z0-9]/,
                    message: "Solo puede ingresar numeros y letras",
                  },
                })}
              />
            </div>
            {errors.username && (
              <span className="danger">{errors.username?.message}</span>
            )}
          </div>
          <div className={style.form__container}>
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
                type="text"
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
              className={`tag16bold ${style["tag16bold--var"]}  ${style.form__titleInput}`}
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
                  minLength: {
                    value: 8,
                    message: "debe ingresar al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 32,
                    message: "debe ingresar menos de 32 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?/~_+-=|]).{8,32}$/,
                    message:
                      "La contraseña tiene que incluir almenos un numero, una letra mayuscula, una minuscula y un caracter especial",
                  },
                })}
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
            {errors.password && (
              <span className="danger">{errors.password?.message}</span>
            )}
          </div>
          <div className={style.form__container}>
            <p
              className={`tag16bold ${style["tag16bold--var"]} ${style.form__titleInput}`}
            >
              Confirme su contraseña
            </p>
            <div className={style.form__containerInput}>
              <BiLock className={`icon ${style.icon} ${style["icon--left"]}`} />
              <input
                type={unlockConfirmPassword ? "text" : "password"}
                placeholder="********************"
                className="form__input"
                {...register("confirmPassword", {
                  required: "*Este campo es requerido",
                })}
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
            {errors.confirmPassword && (
              <span className="danger">{errors.confirmPassword?.message}</span>
            )}
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
