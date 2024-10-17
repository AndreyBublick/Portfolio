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

            {links.map((link) => <li key={link}><NavLink to={`/${link.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('')}`}>{link}<Mask><span>{link}</span></Mask><Mask><span>{link}</span></Mask></NavLink></li>)}

        </List>

    </MenuStyled>
}




const Mask = styled.span`
color:${theme.colors.font};

position: absolute;
top: 0%;
left:0%;
transform:translate(-0%,-0%) skew(0);

width:100%;
height:50%;
overflow:hidden;


&:last-of-type{
    
    
    top:50%;
    overflow:hidden;

    & > span{
        position:absolute;
        top:-100%;
        left:0;
        width:100%;
        height:100%;
        
        

    
    }
    }

    &>span{
        transition:inherit;
    }

`;







const MenuStyled = styled.nav<MenuStyledPorpsType>`

 a{
    color:transparent;
   
    /* color:inherit; */
    position:relative;
    
    font-family: 'DM Sans','Poppins';
    font-size: ${props => props.FZ || theme.fontSize.link};
    font-weight: 500;
    
    transition:all 0.2s ease-in;
    

&::before{
    transition:inherit;
    content:'';
    position:absolute;
    width:120%;
    top: 50%;
    left: 50%;
    height:2px;
    background-color:${theme.colors.title};
    z-index:2;
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




}

${Mask}{
    transition:inherit;
}
`;






const List = styled.ul`
   display:flex;
   gap:50px;
`;

