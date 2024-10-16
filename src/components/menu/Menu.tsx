import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'


type propsType = {
    links:Array<string>,
    FZ?:string,
};
type MenuStyledPorpsType = {
    FZ?:string,

};

export const Menu:FC<propsType> = ({links,FZ}) => {
    return <MenuStyled FZ={FZ}>
        <ul>

            {links.map((link)=><li key={link}><NavLink  to={`/${link.toLowerCase().split('').map((letter)=> letter===' ' ? '_' : letter).join('')}`}>{link}</NavLink></li>)}
           
        </ul>

    </MenuStyled>
}


const MenuStyled = styled.nav<MenuStyledPorpsType>`
ul{
    display:flex;
gap:50px;
}
li{

}
a{
    color:inherit;
    
font-family: 'DM Sans','Poppins';
font-size: ${props=> props.FZ || theme.fontSize.link};
font-weight: 500;
line-height: 1.3;
padding:8px 0;


}
`;
