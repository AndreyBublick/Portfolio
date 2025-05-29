import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { S } from './Menu_Styles';
import { TextToLowerCase } from '../../utils/utils';
import { Categories } from '../../layout/sections/myWorks/MyWorks';
import { useScrollTop } from '../../hooks/scrollTop';


type propsType = {
    links: Array<string>,
    fz?: string,
    activeElement?: Categories,
    scrollTop?:boolean,

};


export const Menu: FC<propsType> = ({ scrollTop,links, fz, activeElement }) => {

    const onClickAnchor = useScrollTop();

    const activeElementLowerCase = activeElement && TextToLowerCase(activeElement);
    
    

    return <S.Menu>
        <S.List >
            {links.map((link) => scrollTop ? <S.MenuItem fz={fz} onClick={onClickAnchor} isActive={activeElementLowerCase === `${TextToLowerCase(link)}`} key={link}>
                
                <NavLink className={({isActive})=> isActive ? '_active' : ''} to={`/${TextToLowerCase(link) !=='home' ? TextToLowerCase(link):''}`}>{link}   
                </NavLink>
                <S.Mask><span>{link}</span></S.Mask>
                <S.Mask><span>{link}</span></S.Mask>
            </S.MenuItem>:<S.MenuItem fz={fz} isActive={activeElementLowerCase === `${TextToLowerCase(link)}`} key={link}>
                
                <NavLink className={({isActive})=> isActive ? '_active' : ''} to={`/${TextToLowerCase(link) !=='home' ? TextToLowerCase(link):''}`}>{link}   
                </NavLink>
                <S.Mask><span>{link}</span></S.Mask>
                <S.Mask><span>{link}</span></S.Mask>
            </S.MenuItem>)}

        </S.List>

    </S.Menu>
}


