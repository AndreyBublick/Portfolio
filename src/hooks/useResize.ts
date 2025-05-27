import {useEffect, useState} from "react";

export const useResize = (windowSize=768) => {
    const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
        const resizeWindow = () => {
            if(window.innerWidth<=windowSize){
                setIsMobile(true);
            }
            else{
                setIsMobile(false);

            }
        };

        window.addEventListener('resize', resizeWindow);
        resizeWindow(); // Инициализация при монтировании

        return () => {
            window.removeEventListener('resize', resizeWindow);
        };
    }, []);
     return isMobile
};