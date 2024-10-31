import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
 

  const onResize = (e:Event) => {
    setWidthWindow(window.innerWidth);

   
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return [widthWindow];
};
