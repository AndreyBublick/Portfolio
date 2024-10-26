import React, { FC, useState } from 'react'
import { Menu } from '../../../components/menu/Menu'
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { S } from './MobileMenu_Styles';



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



