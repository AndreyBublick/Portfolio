import React, { FC, useRef, useState } from 'react'



import { S } from './MobileMenu_Styles';
import { Menu } from '../../../../components/menu/Menu';
import { ListSocial } from '../../../../components/listSocial/ListSocial';



type propsType = {
    links: string[],
};

export const MobileMenu: FC<propsType> = ({ links }) => {
    const [isShow, setIsShow] = useState(false);

    const body = useRef(document.body);

    const onCkickBurger = ()=>{


        setIsShow(prev => !prev) ;
      isShow ? body.current.style.overflow = 'auto' :body.current.style.overflow = 'hidden';
        
    };


    return <>
        <S.Burger onClick={onCkickBurger} isShow={isShow}><span></span></S.Burger>

         <S.Popup onClick={()=>{setIsShow(false);body.current.style.overflow = 'auto';}} isShow={isShow}>
                    <div  /* onClick={e => e.stopPropagation()} */ >
                    <Menu scrollTop links={links} />
                    <ListSocial />
                    </div>
            
        </S.Popup>

    </>
}



