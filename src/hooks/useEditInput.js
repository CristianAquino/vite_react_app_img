import { useRef, useState } from "react";

export const useEditInput = () => {
  const [changeIcon, setChangeIcon] = useState(true);
  const referenceInput = useRef();

  const handleChangeIconIcon = () => {
    setChangeIcon(!changeIcon);
  };

  const handleReferenceInput = () => {
    const currentInput = referenceInput.current;
    if (changeIcon) {
      currentInput.removeAttribute("disabled");
      currentInput.focus();
      handleChangeIconIcon();
    } else {
      currentInput.setAttribute("disabled", "disabled");
      handleChangeIconIcon();
    }
  };

  return [changeIcon, referenceInput, handleReferenceInput];
};
