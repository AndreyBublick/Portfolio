import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { scrolling } from "../../styles/animations/animations";
const Mask = styled.span`
text-transform: capitalize;
transition:0.1s all linear;
position:absolute;
top:8px;
left:15px;
z-index:1;
pointer-events:none;
background-image:linear-gradient(90deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
color:transparent;
background-clip:text;
-moz-background-clip:text;
-webkit-background-clip:text;
caret-color:red;

`;



const FormField = styled.input<{as?:React.ElementType}>`
width:100%;

/* color:${theme.colors.gradient.color1}; */
background-image:linear-gradient(90deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
color:transparent;
caret-color:violet;
background-clip:text;
-moz-background-clip:text;
-webkit-background-clip:text;
position:relative;

line-height: 2.5;
padding:0 15px;
transition:box-shadow 0.15s linear;

&::placeholder{

    /* color:${theme.colors.gradient.color2}; */
     opacity:0; 
    font-weight: 300;
}
&:focus-visible{
    border:none;
}


&:not(:placeholder-shown) + ${Mask}{
    top:-12px;
    left:10px;
    font-size:12px;
}


${props=> props.as && css<{as?:React.ElementType}>`
min-height:300px;
resize:none;
@media screen and (max-width:450px) {
    min-height:200px;  
}
`}

`;

const FormFieldWrapper = styled.div`
position:relative;


width:100%;
z-index:0;
&::before{
    content:'';
    bottom: 0;
    left: 0;
    position:absolute;
    width:100%;
    height:2px;
    background-image:linear-gradient(90deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
    background-color:red;
    z-index:1;

}

`;


export const S = {
    FormField,
    Mask,
    FormFieldWrapper,
};