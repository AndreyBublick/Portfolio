import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { S } from './Menu_Styles';
import { TextToLowerCase } from '../../utils/utils';
import { categoryType } from '../../layout/sections/myWorks/MyWorks';


type propsType = {
    links: Array<string>,
    fz?: string,
    activeElement?: categoryType,

};


export const Menu: FC<propsType> = ({ links, fz, activeElement }) => {

    console.log(activeElement);
    

    const activeElementLowerCase = activeElement && TextToLowerCase(activeElement);
    
    

    return <S.Menu >
        <S.List >

            {links.map((link) => <S.MenuItem fz={fz} isActive={activeElementLowerCase === `${TextToLowerCase(link)}`} key={link}>
                
                <NavLink className={({isActive})=> isActive ? '_active' : ''} to={`/${TextToLowerCase(link) !=='home' ? TextToLowerCase(link):''}`}>{link}   
                </NavLink>
                <S.Mask><span>{link}</span></S.Mask>
                <S.Mask><span>{link}</span></S.Mask>
            </S.MenuItem>)}

        </S.List>

    </S.Menu>
}


