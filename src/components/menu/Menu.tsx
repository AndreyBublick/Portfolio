import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'


type propsType = {
    links: Array<string>,
    FZ?: string,
};
type MenuStyledPorpsType = {
    FZ?: string,

};

export const Menu: FC<propsType> = ({ links, FZ }) => {
    return <MenuStyled FZ={FZ}>
        <List>

            {links.map((link) => <li key={link}><Mask><span>{link}</span></Mask><Mask><span>{link}</span></Mask><NavLink to={`/${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`}>{link}</NavLink></li>)}

        </List>

    </MenuStyled>
}




const Mask = styled.span`
color:inherit;
transition:inherit;
position: absolute;
overflow:hidden;
z-index:-1;


transform:translate(-0%,-0%) skew(0);

width:100%;
height:50%;

&>span{
    position:absolute;
    /* overflow:hidden; */
    transition:inherit;
    width:100%;
    height:100%;    
    }

    &:first-of-type{
        top: 0%;
        left:0%;
        &>span{
            top:50%;
            transform:translateY(-50%);
    }
    }

    &:last-of-type{
        left:0;
        bottom:0%;
    

    & > span{
      
        top:-50%;
        transform:translateY(-50%);
        

    
    }
    }



`;







const MenuStyled = styled.nav<MenuStyledPorpsType>`

`;























const List = styled.ul<MenuStyledPorpsType>`
   display:flex;
   gap:50px;
   
   li{
    
    z-index:0;
   
   
    position:relative;
    
    font-family: 'DM Sans',sans-serif;
   
    font-weight: 500;
    
    transition:all 0.2s ease-in;
    

&::before{
    transition:inherit;
    content:'';
    position:absolute;
    z-index:-1;
    width:120%;
    top: 50%;
    left: 50%;
    height:2px;
    background-color:${theme.colors.title};
    
    transform:translate(-50%,-50%);
    opacity:0;

}
&:hover{
    &::before{
        opacity:1;
    }
    ${Mask}:first-of-type{
        transform:translate(3%,-0%) skew(15deg);
       
    &>span{
        color:${theme.colors.gradient.color1};

    }

    }
    ${Mask}:last-of-type{
        transform:translate(-5%,-0%) skew(15deg);
       
    &>span{
        color:${theme.colors.gradient.color2};

    
}
    }
}




a{
    display:inline-block;
    color:transparent;
    
 }
   }
`;

