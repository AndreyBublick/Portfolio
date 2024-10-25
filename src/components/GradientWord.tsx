




import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme';




export const GradientWord = styled.span`
    display:block;
    background-image: linear-gradient(270deg, ${theme.colors.gradient.color1},${theme.colors.gradient.color2} 120%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Для поддержки WebKit-браузеров */
  background-clip: text; /* Для остальных браузеров */

  /* line-height:1.2; */
  
`; 
