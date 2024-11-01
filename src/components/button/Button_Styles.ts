import styled from "styled-components";
import { theme } from "../../styles/theme";
import { glowing } from "../../styles/animations/animations";

const Button = styled.button`

position:relative;
font-family:DM Sans;
line-height:2;
text-transform: capitalize;font-weight: 500;
border-radius:0.15em;
font-size:25px;
padding:0 35px;

    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    

    &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: inherit;
}

&:active {
    color: ${theme.colors.primaryBg};
}

&:active:after {
    background: transparent;
}

&:hover:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.font};
    left: 0;
    top: 0;
    border-radius: inherit;
}





`;

export const S = {
    Button,
};