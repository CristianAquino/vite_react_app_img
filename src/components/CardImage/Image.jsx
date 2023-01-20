import style from "./CardImage.module.css";

const Image = ({ children, dimension }) => {
  return (
    <div className={style.imageContainer} style={{ ...dimension }}>
      <img
        src="https://i.postimg.cc/ryvSF2Z1/Gakkou-Gurashi.jpg"
        alt="a"
        className={style.imageContainer__image}
      />
      {children}
    </div>
  );
};

export default Image;
