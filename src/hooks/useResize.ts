import {useEffect, useState} from "react";

export const useResize = () => {
    const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
        const resizeWindow = () => {
            if(window.innerWidth<=768){
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