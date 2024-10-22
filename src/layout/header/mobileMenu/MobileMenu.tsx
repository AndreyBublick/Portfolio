import React, { FC, useState } from 'react'
import { Menu } from '../../../components/menu/Menu'
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';


type burgerPropsType = {
    isShow:boolean,
};
type propsType = {
    links:string[],
};

export const MobileMenu:FC<propsType> = ({links}) => {
    const [isShow,setIsShow] = useState(false);




    return <MobileMenuStyled>
        <Burger onClick={()=>{setIsShow(prev=> !prev)}} isShow={isShow}><span></span></Burger> 

        <Popup isShow = {isShow}>

        <Menu links={links} />

        </Popup>

    </MobileMenuStyled>
}

const MobileMenuStyled = styled.div`

`;
const Burger = styled.button<burgerPropsType>`
position:relative;
z-index:100;


width:34px;
height:24px;

&::before,&::after{
    content:'';
    left:0;
    transform: translate(0,0) rotate(0deg);
}
&::before,&::after,span{ //all
    transition:0.3s all ease-in;
    position:absolute;
    height:4px;
    width:100%;
    
    
    background-color:${theme.colors.title};
    border-radius:5em;
}
span{
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) scale(1);
}
&::before{
    top:0;
}
&::after{
    bottom:0;
}


${props => props.isShow && css<burgerPropsType>`
    &::before,&::after,span{
        height:2px;
    }
    &::before,&::after{
        left:50%; 
      
        background-color:${theme.colors.gradient.color1};
    }
    &::before{
        top:50%;
        transform:translate(-50%,-50%) rotate(45deg);
    }
    span{
        transform: translate(-50%,-50%) scale(0);
        background-color:${theme.colors.primaryBg};
    }
    &::after{
        background-color:${theme.colors.gradient.color2};
        bottom:50%;
        transform: translate(-50%,50%) rotate(-45deg);

    }
`}

`;



const Popup = styled.div<burgerPropsType>`
display:none;
justify-content:center;
align-items:center;
position:fixed;
top: 0;
z-index:99;
left: 0;
width:100%;
height: 100%;
background-color:rgba(0, 0, 0, 0.9);
nav > ul{
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
        font-size: 26px;
    
}


${props => props.isShow && css<burgerPropsType>`
    display:flex;
`}


`;