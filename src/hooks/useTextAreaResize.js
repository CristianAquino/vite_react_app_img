import { useEffect, useRef, useState } from "react";

export const useTextAreaResize = () => {
  const [txtArea, setTxtArea] = useState("");
  const txtAreaRef = useRef();

  useEffect(() => {
    const txtAreaResize = txtAreaRef.current;
    txtAreaResize.style.height = txtAreaResize.scrollHeight + "px";
  }, [txtArea]);

  return [txtArea, setTxtArea, txtAreaRef];
};
