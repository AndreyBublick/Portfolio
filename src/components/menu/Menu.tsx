import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Menu = () => {
    return <MenuStyled>
        <ul>
            <li><NavLink to={'/home'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/tech_stack'}>Tech Stack</NavLink></li>
            <li><NavLink to={'/projects'}>Projects</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
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
