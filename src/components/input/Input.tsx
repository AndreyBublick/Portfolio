


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

export const Input = () => {
    const {value,changeValue} = useInput();
    return <InputStyled value={value} onInput={changeValue} type={'text'} name='name' placeholder='name'></InputStyled>
    
}


const InputStyled = styled.input`
width:710px;

background-color:transparent;
color:${theme.colors.gradiend.color1};
border:2px solid ${theme.colors.gradiend.color2};
border-radius:2em;
line-height: 2.5;
padding:0 15px;
`;

