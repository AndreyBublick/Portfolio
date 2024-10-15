


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

export const Textarea = () => {
    const {value,changeValue} = useInput();
    return <TextareaStyled value={value} onInput={changeValue} name='name' placeholder='Your text'></TextareaStyled>
    
}


const TextareaStyled = styled.textarea`
width:710px;

background-color:transparent;
color:${theme.colors.gradiend.color1};
border:2px solid ${theme.colors.gradiend.color2};
border-radius:0.4em;
resize: none;
padding: 10px 15px;
min-height:300px;
&::placeholder{
    color:${theme.colors.gradiend.color2};
    font-weight: 300;
}
`;

