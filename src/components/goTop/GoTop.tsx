import React, { useRef } from 'react'
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";
import { theme } from '../../styles/theme';
export const GoTop = () => {

    const homePage = useRef(document.getElementById('root'));


    const onClickAnchor = () => {
        homePage.current?.scrollIntoView({ behavior: 'smooth' });
    };


  return (
    <ButtonStyled onClick={onClickAnchor} type={'button'}>
            <FaArrowUp />
    </ButtonStyled>
  )
}


const ButtonStyled = styled.button `
position:fixed;
right:20px;
bottom:20px;
width:75px;
height:75px;
border-radius:50%;
border:2px solid ${theme.colors.gradient.color2};
svg{
    font-size:30px;
    position:absolute;
color:${theme.colors.gradient.color1};

left:50%;
top:50%;
transform:translate(-50%,-50%);

}
`;
