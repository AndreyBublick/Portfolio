import styled from "styled-components";
import { theme } from "../../styles/theme";

const Button = styled.button`

position:relative;
font-family:DM Sans;
line-height:2;
text-transform: capitalize;
border-radius:0.15em;
font-size:25px;
padding:0 35px;
border:2px solid;
/* border-image: linear-gradient(225deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2}) 1; */
z-index:0;


background-color:transparent;
font-weight: 500;
/* background:linear-gradient(225deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2}); */
/* background-image:linear-gradient(45deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
color:transparent;
background-clip:text;
-moz-background-clip:text;
-webkit-background-clip:text; */
color:${theme.colors.primaryBg};
border-radius:4px;
overflow:hidden;

&::before{
    content:'';
    top: 0;
    left:0;
    position:absolute;

    width:200%;   
    height:100%;   
    transition:0.3s;
    background-image:linear-gradient(90deg,${theme.colors.gradient.color1},${theme.colors.gradient.color2});
    z-index:-1;
    transform:translateX(0);

}
&:hover{
    &::before{
        transform:translateX(-50%);
    }
}
`;

export const S = {
    Button,
};