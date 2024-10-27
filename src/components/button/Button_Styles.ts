import styled from "styled-components";
import { theme } from "../../styles/theme";

const Button = styled.button`


font-family:DM Sans;
line-height:2;
text-transform: capitalize;
border-radius:0.15em;
font-size:25px;
padding:0 35px;
border:2px solid;
border-image: linear-gradient(225deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2}) 1;




background-color:transparent;
font-weight: 500;
/* background:linear-gradient(225deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2}); */
background-image:linear-gradient(45deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
color:transparent;
background-clip:text;
-moz-background-clip:text;
-webkit-background-clip:text;

`;

export const S = {
    Button,
};