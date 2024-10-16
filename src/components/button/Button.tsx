import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';

 
type propsType = {
    textBody:string,
};

export const Button:FC<propsType> = ({textBody}) => {
  return (
    <ButtonStyled>
      {textBody}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
font-family:DM Sans;
line-height:2;
text-transform: capitalize;
border-radius:0.15em;
font-size:25px;
padding:0 35px;
border:2px solid ${theme.colors.gradient.color1};
box-shadow:0 -0px 3px 0px ${theme.colors.gradient.color1};



background-color:transparent;
font-weight: 500;
/* background:linear-gradient(225deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2}); */
color:${theme.colors.gradient.color1};
`;
