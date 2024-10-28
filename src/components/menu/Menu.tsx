import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { S } from './Menu_Styles';


type propsType = {
    links: Array<string>,
    fz?: string,
    activeElement?: string,

};


export const Menu: FC<propsType> = ({ links, fz, activeElement }) => {

    const activeElementLowerCase = activeElement?.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('');


    return <S.Menu >
        <S.List >

            {links.map((link) => <S.MenuItem fz={fz} isActive={activeElementLowerCase === `${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`} key={link}>
                
                <NavLink className={({isActive})=> isActive ? '_active' : ''} to={`${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`}>{link}
                </NavLink>
                <S.Mask><span>{link}</span></S.Mask>
                <S.Mask><span>{link}</span></S.Mask>
            </S.MenuItem>)}

        </S.List>

    </S.Menu>
}


