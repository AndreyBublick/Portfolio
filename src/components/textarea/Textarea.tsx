


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';

export const Textarea = () => {
    const { value, changeValue } = useInput();
    return <TextareaStyled value={value} onInput={changeValue} name='name' placeholder='Your text'></TextareaStyled>

}


const TextareaStyled = styled.textarea`



color:${theme.colors.gradient.color1};


width:100%;
border:2px solid;
/* border-radius:0.4em; */
resize: none;
padding: 10px 15px;
min-height:300px;
transition:box-shadow 0.25s linear,border 0.25s linear;
border-image:linear-gradient(0deg,${theme.colors.gradient.color1} 0%,${theme.colors.gradient.color1} 40%,${theme.colors.gradient.color2}) 1;



&::placeholder{
    color:${theme.colors.gradient.color2};
    font-weight: 300;
}
&:focus-visible{
    background-color:transparent;
    border-image:linear-gradient(0deg,${theme.colors.gradient.color1} 0%,${theme.colors.gradient.color1} 40%,${theme.colors.gradient.color2}) 1;


    box-shadow: 2px 0 3px -0px darkviolet,
            -2px 0 3px -0px darkviolet,
            0 -2px 3px -0px ${theme.colors.gradient.color2},
            0 2px 3px -0px ${theme.colors.gradient.color1};
}
@media screen and (max-width:450px) {
    min-height:200px;  
}
`;

