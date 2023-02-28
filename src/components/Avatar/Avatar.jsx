// style
import style from "./Avatar.module.css";

const Avatar = ({ styleAvatar, name }) => {
  return (
    <div className={style.avatar} style={{ ...styleAvatar }}>
      {name?.split("")[0].toUpperCase()}
    </div>
  );
};

export default Avatar;
