




import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme';




export const GradientWord = styled.span`
    display:block;
    background: linear-gradient(270deg, ${theme.colors.gradiend.color1},${theme.colors.gradiend.color2} 120%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Для поддержки WebKit-браузеров */
  background-clip: text; /* Для остальных браузеров */
  line-height:calc(70 / 58);
`; 
