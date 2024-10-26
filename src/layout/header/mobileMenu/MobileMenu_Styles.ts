import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";


type burgerPropsType = {
    isShow:boolean,
};


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
display:flex;
justify-content:center;
align-items:center;
position:fixed;
top: 0;
z-index:99;
left: 0;
width:100%;
height: 100%;
background-color:rgba(0, 0, 0, 0.9);
nav{
    height:100%;
}
nav > ul{
    height:inherit;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
        font-size: 26px;
    
}





`;


export const S = {
    Burger,
    Popup,   
};