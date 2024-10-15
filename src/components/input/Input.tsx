


import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

type propsType = {
placeholderBody:string,
inputType?:'password'|'submit'|'number',

};

export const Input:FC<propsType> = ({placeholderBody,inputType}) => {
    const {value,changeValue} = useInput();
    return <InputStyled value={value} onInput={changeValue} type={inputType? inputType : 'text'} name={placeholderBody} placeholder={placeholderBody}></InputStyled>
    
}


const InputStyled = styled.input`
width:710px;

background-color:transparent;
color:${theme.colors.gradiend.color1};
border:2px solid ${theme.colors.gradiend.color2};
border-radius:2em;
line-height: 2.5;
padding:0 15px;
&::placeholder{
    color:${theme.colors.gradiend.color2};
    font-weight: 300;
}
`;

