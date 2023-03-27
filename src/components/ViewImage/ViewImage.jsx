import style from "./ViewImage.module.css";
import Image from "../CardImage/Image";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { chapterwithfolderId } from "../../https/chapterRequest";
import { chapterSuccess } from "../../redux/slices/chapterSlice";

export const ViewImage = () => {
  const params = useParams();
  const { chapters } = useSelector((state) => state.chapterSlice);
  const dispatch = useDispatch();

  const chapter = chapters?.chapters.find(
    (chapter) => chapter.name === params.chapterName
  );

  useEffect(() => {
    chapterwithfolderId(params.folderName).then((res) =>
      dispatch(chapterSuccess(res))
    );
  }, []);

  const styleContainerImage = {
    borderRadius: 0,
  };
  const styleTagImage = {
    verticalAlign: "middle",
  };

  return (
    <div className={style.view__body}>
      {chapter?.images.map((img) => (
        <Image
          key={img}
          styleContainerImage={styleContainerImage}
          styleTagImage={styleTagImage}
          url={img}
        />
      ))}

      {/* <Image
        styleContainerImage={styleContainerImage}
        styleTagImage={styleTagImage}
      />
      <Image
        styleContainerImage={styleContainerImage}
        styleTagImage={styleTagImage}
      /> */}
    </div>
  );
};
