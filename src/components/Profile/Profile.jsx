import style from "../SignIn/SingIn.module.css";
import stProfile from "./Profile.module.css";
import { BiLock, BiEnvelope, BiUser, BiEdit } from "react-icons/bi";
import { TbCameraPlus } from "react-icons/tb";
import { useState } from "react";
import Image from "../Folder/Image";

export const Profile = () => {
  const [lock, setLock] = useState(false);

  const handleLock = (e) => {
    setLock(!lock);
    console.log(e.target.previousSibling);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sizeImage = {
    width: "192px",
    height: "192px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div className={style.signIn}>
      <div className={style.headSingIn}>
        <span className={style.titleSignIn}>Perfil de usuario</span>
      </div>
      <div className={style.bodySignIn}>
        <div className={stProfile.changeImage}>
          <Image dimension={sizeImage} />
          <p>
            <TbCameraPlus />
          </p>
        </div>
        <form className={style.formSingIn} onSubmit={handleSubmit}>
          <div>
            <span>Nombre de usuario</span>
            <div className={style.inputPassSingIn}>
              <BiUser />
              <input type="text" placeholder="username" />
              <BiEdit onClick={handleLock} />
            </div>
          </div>
          <div>
            <span>Correo electronico</span>
            <div className={style.inputPassSingIn}>
              <BiEnvelope />
              <input type="text" placeholder="jhondoe@example.com" />
              <BiEdit onClick={handleLock} />
            </div>
          </div>
          <div>
            <span>Contraseña</span>
            <div className={style.inputPassSingIn}>
              <BiLock />
              <input
                type={lock ? "text" : "password"}
                placeholder="********************"
              />
              <BiEdit onClick={handleLock} />
            </div>
          </div>
          <button className={style.buttonSingIn}>guardar cambios</button>
        </form>
      </div>
    </div>
  );
};
