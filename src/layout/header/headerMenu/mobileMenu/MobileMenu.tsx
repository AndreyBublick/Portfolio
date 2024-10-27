import React, { FC, useState } from 'react'



import { S } from './MobileMenu_Styles';
import { Menu } from '../../../../components/menu/Menu';



type propsType = {
    links: string[],
};

export const MobileMenu: FC<propsType> = ({ links }) => {
    const [isShow, setIsShow] = useState(false);




    return <>
        <S.Burger onClick={() => { setIsShow(prev => !prev) }} isShow={isShow}><span></span></S.Burger>

        {isShow && <S.Popup isShow={isShow}>

            <Menu links={links} />

        </S.Popup>}

    </>
}



