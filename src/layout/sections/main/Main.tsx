import React from 'react';

import man from '../../../assets/images/man.webp';
import styled from 'styled-components';
import { spin } from '../../../styles/animations/animations';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/theme';
import { GradientWord } from '../../../components/GradientWord';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';

export const Main = () => {
    return <MainStyled>
        <Container>

        
        <FlexWrapper gap={15}  alignItems={'center'} flexWrap={'wrap'}> 
            <Title>
                Hi 👋,<br />
                My name is<br />
                <GradientWord>Pavan MG</GradientWord>
                I build things for web
            </Title>

            <div className='image'>

                <div className='image_body'>
                    <img src={man} alt={'Pavan MG'} />

                </div>
            </div>
        </FlexWrapper>

        </Container>
    </MainStyled>

}

const MainStyled = styled.section`

min-height:100vh;
display:flex;




.image{
    margin:0 auto;
    flex: 0 0 350px;
    border-radius:50%;
    overflow:hidden;
    
    position:relative;
    &::before{
        content:'';
        top: 0;
        background:linear-gradient(90deg, ${theme.colors.gradient.color1} ,${theme.colors.gradient.color2} );
       
        left: 0;
        width: 100%;
        height: 100%;
        position:absolute;
        animation:${spin} 3.0s infinite linear;
        transition:transform 3.0s;
    }
    @media screen and (max-width:850px) {
    flex: 0 0 300px; 
} 
}
.image_body{
    
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

@media ${theme.media.tablet} {
    align-items:center;
}
@media ${theme.media.tablet} {
    ${Container} > ${FlexWrapper} {
     
        gap:50px;
    }
}
@media screen and (max-height:700px) {
    padding:100px 0;
}
`;



const Title = styled.h2`
flex-grow:1;

  ${font({color:theme.colors.title,weight:700,fMax:58,fMin:28})}
    
    text-align:left;
    @media ${theme.media.tablet} {
   
         
    text-align:center;
        
    
}
`;





