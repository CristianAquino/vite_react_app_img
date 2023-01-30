import { useState } from "react";

export const useChangeIcon = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  const handleChangeIconIcon = () => {
    setChangeIcon(!changeIcon);
  };

  return [changeIcon, handleChangeIconIcon];
};
