import { useEffect, useRef, useState } from "react";

export const useScrollY = () => {

 /* Что-то со скролом */

  const [scrollYWindow, setScrollYWindow] = useState(window.scrollY);


  const onScroll = () => {
    
    console.log(window.scrollY);

    setScrollYWindow(window.scrollY); 
    
  };

   useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); 

  return [scrollYWindow];
};
