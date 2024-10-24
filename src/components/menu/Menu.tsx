import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'


type propsType = {
    links: Array<string>,
    fz?: string,
    activeElement?: string,

};
type MenuStyledPorpsType = {
    fz?: string,

};

export const Menu: FC<propsType> = ({ links, fz, activeElement }) => {
    return <MenuStyled >
        <List fz={fz}>

            {links.map((link) => <LI isActive={activeElement === `${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`} key={link}><Mask><span>{link}</span></Mask><Mask><span>{link}</span></Mask><NavLink to={`${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`}>{link}</NavLink></LI>)}

        </List>

    </MenuStyled>
}




const Mask = styled.span`
color:inherit;
transition:inherit;
position: absolute;
overflow:hidden;
z-index:-1;


transform:translate(0%,0%) skew(0);

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







const MenuStyled = styled.nav`

`;

const List = styled.ul<MenuStyledPorpsType>`


   display:flex;
   gap:50px;

   font-size: ${props => props.fz || theme.fontSizes.link};
   
   
`;






const LI = styled.li<{ isActive?: boolean }>`



    
    z-index:0;
   
    white-space:nowrap;
   
    position:relative;
    
    font-family: 'DM Sans',sans-serif;
   
    font-weight: 500;
    
    transition:all 0.2s ease-in;
    

&::before{
    transition:inherit;
    content:'';
    position:absolute;
    z-index:1;
    pointer-events:none;
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
   


${props => props.isActive && css<{ isActive?: boolean }>`


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
`}



`;