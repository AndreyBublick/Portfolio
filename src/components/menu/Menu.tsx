import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'


type propsType = {
    links:Array<string>,
};

export const Menu:FC<propsType> = ({links}) => {
    return <MenuStyled>
        <ul>

            {links.map((link)=><li><NavLink key={link} to={`/${link.toLowerCase().split('').map((letter)=> letter===' ' ? '_' : letter).join('')}`}>{link}</NavLink></li>)}
           
        </ul>

    </MenuStyled>
}


const MenuStyled = styled.nav`
ul{
    display:flex;
gap:50px;
}
li{

}
a{
    color:${theme.colors.text};
font-family: 'DM Sans','Poppins';
font-size: ${theme.fontSize.link};
font-weight: 500;
line-height: 1.3;
padding:8px 0;


}
`;
