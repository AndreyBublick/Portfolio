import { useRef } from "react";

export const useScrollTop = () => {
    const homePage = useRef(document.getElementById('root'));

    const onClickAnchor = () => {
        homePage.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return onClickAnchor;
}

