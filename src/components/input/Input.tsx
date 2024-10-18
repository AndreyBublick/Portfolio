


import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

type propsType = {
    placeholderBody: string,
    inputType?: 'password' | 'submit' | 'number',

};

export const Input: FC<propsType> = ({ placeholderBody, inputType }) => {
    const { value, changeValue } = useInput();
    return <InputStyled value={value} onInput={changeValue} type={inputType ? inputType : 'text'} name={placeholderBody} placeholder={placeholderBody}></InputStyled>

}


const InputStyled = styled.input`
width:710px;

color:${theme.colors.gradient.color1};
border:2px solid ${theme.colors.gradient.color2};
border-radius:2em;
line-height: 2.5;
padding:0 15px;
transition:box-shadow 0.15s linear;

&::placeholder{
    color:${theme.colors.gradient.color2};
    font-weight: 300;
}
&:focus-visible{
    box-shadow:0 0 3px 1px ${theme.colors.gradient.color2};
    background-color:transparent;
}


`;

