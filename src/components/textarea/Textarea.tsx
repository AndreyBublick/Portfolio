


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

export const Textarea = () => {
    const { value, changeValue } = useInput();
    return <TextareaStyled value={value} onInput={changeValue} name='name' placeholder='Your text'></TextareaStyled>

}


const TextareaStyled = styled.textarea`
width:710px;

background-color:transparent;
color:${theme.colors.gradient.color1};



border:2px solid;
border-radius:0.4em;
border-image:linear-gradient(0deg,${theme.colors.gradient.color1} 0%,${theme.colors.gradient.color1} 40%,${theme.colors.gradient.color2}) 1;
resize: none;
padding: 10px 15px;
min-height:300px;

box-shadow: 2px 0 3px -0px darkviolet,
            -2px 0 3px -0px darkviolet,
            0 -2px 3px -0px ${theme.colors.gradient.color2},
            0 2px 3px -0px ${theme.colors.gradient.color1};


&::placeholder{
    color:${theme.colors.gradient.color2};
    font-weight: 300;
}

`;

