import style from "./CardImage.module.css";

const Image = ({ children, styleContainerImage, styleTagImage }) => {
  return (
    <div className={style.containerImage} style={{ ...styleContainerImage }}>
      <img
        src="https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg"
        alt="a"
        className={style.tagImage}
        style={{ ...styleTagImage }}
      />
      {children}
    </div>
  );
};

export default Image;
