// react
import ReactDOM from "react-dom";
// style
import style from "./MenuAvatar.module.css";
// icons
import { BiLogOut, BiLike, BiCloudUpload, BiMerge } from "react-icons/bi";
// react-router-dom
import { Link, useNavigate } from "react-router-dom";
// component
import Avatar from "../Avatar/Avatar";
// redux
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
// routes
import routes from "../../base/settings/routes";
import Image from "../CardImage/Image";

const MenuAvatar = ({ open, close, user }) => {
  // redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // style
  const styleAvatar = {
    fontSize: "30px",
    backgroundColor: `${user.avatar.bg}`,
    width: "48px",
    height: "48px",
  };
  const styleContainerImage = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  };
  const styleTagImage = {
    objectFit: "cover",
    objectPosition: "center",
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const Menu = (
    <div
      className={`${style.contentMenuAvatar} ${
        open && style.contentMenuAvatar__active
      }`}
      onClick={close}
    >
      <ul className={style.contentMenuUl}>
        <li>
          <Link className={`link ${style.listMenuAvatar}`} to={routes.PROFILE}>
            {user.urlAvatar ? (
              <Image
                styleContainerImage={styleContainerImage}
                styleTagImage={styleTagImage}
                url={user.urlAvatar}
              />
            ) : (
              <Avatar styleAvatar={styleAvatar} name={user.username} />
            )}
            <span>
              {user.firstName} {user.lastName}
              <br />@{user.username}
            </span>
          </Link>
        </li>
        {user.isAdmin && (
          <>
            <li>
              <Link
                className={`link ${style.listMenuAvatar}`}
                to={routes.DASHBOARD}
              >
                <BiMerge className={`icon ${style["icon--var"]}`} />
                <span className={style.listTag}>Mi contenido</span>
              </Link>
            </li>
            <li>
              <Link
                className={`link ${style.listMenuAvatar}`}
                to={routes.CREATEFOLDER}
              >
                <BiCloudUpload className={`icon ${style["icon--var"]}`} />
                <span className={style.listTag}>Subir contenido</span>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link className={`link ${style.listMenuAvatar}`} to="/liked">
            <BiLike className={`icon ${style["icon--var"]}`} />
            <span className={style.listTag}>Siguiendo</span>
          </Link>
        </li>
        <li className={`link ${style.listMenuAvatar}`} onClick={handleLogout}>
          <BiLogOut className={`icon ${style["icon--var"]}`} />
          <span className={style.listTag}>Logout</span>
        </li>
      </ul>
    </div>
  );

  return ReactDOM.createPortal(Menu, document.getElementById("modalPortails"));
};

export default MenuAvatar;
