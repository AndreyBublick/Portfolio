import React from 'react';

import man from '../../../assets/images/man.webp';
import styled from 'styled-components';
import { spin } from '../../../styles/animations/animations';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/theme';

export const Main = () => {
    return <MainStyled>
        <FlexWrapper gap={170}>
            <MainTitleStyled>
                Hi 👋,<br />
                My name is<br />
                <span>Pavan MG</span>
                I build things for web
            </MainTitleStyled>
            <div className='image'>

                <div className='image_body'>
                    <img src={man} alt={'Pavan MG'} />

                </div>
            </div>
        </FlexWrapper>


    </MainStyled>

}

const MainStyled = styled.section`


max-width:${theme.container.width};
width:100%;
padding:0 ${theme.container.leftAndRight};
margin: 0 auto;


.image{
    flex: 0 0 350px;
    border-radius:50%;
    overflow:hidden;
    
    position:relative;
    &::before{
        content:'';
        top: 0;
        background:linear-gradient(90deg, ${theme.colors.gradiend.color1} ,${theme.colors.gradiend.color2} );
       
        left: 0;
        width: 100%;
        height: 100%;
        position:absolute;
        animation:${spin} 3.0s infinite linear;
        transition:transform 3.0s;
    }
}
.image_body{
   
    position:relative;
    padding-bottom:100%;
    padding-left:100%;

img{
    border-radius:50%;
    overflow:hidden;
    border:9px solid transparent;
    position:absolute;
    top:0;
    width: 100%;
    height: 100%;
    left: 0;
    object-fit:cover;
}
}
`; 
const MainTitleStyled = styled.h2`



    color:${theme.colors.title};
font-size: 58px;
font-weight: 700;
line-height: 1.3;
letter-spacing: -1px;


span{
    display:block;
    background: linear-gradient(270deg, ${theme.colors.gradiend.color1},${theme.colors.gradiend.color2} 120%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Для поддержки WebKit-браузеров */
  background-clip: text; /* Для остальных браузеров */
}




`;
