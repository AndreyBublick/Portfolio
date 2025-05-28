import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const Mask = styled.span`
text-transform: capitalize;
transition:0.1s all linear;
position:absolute;
top:8px;
left:15px;
z-index:1;
    

pointer-events:none;
color:${theme.colors.font};



`;



const FormField = styled.input<{as?:React.ElementType}>`
width:100%;

color:${theme.colors.title};
caret-color:${theme.colors.title};

position:relative;

line-height: 2.5;
padding:0 15px;
transition:box-shadow 0.15s linear;
    
 
&::placeholder{
    
     opacity:0; 
    font-weight: 300;
}



    &:focus-visible{
        outline: none;
    }
   


&:not(:placeholder-shown) + ${Mask}{
    top:-12px;
    left:10px;
    font-size:12px;
    color:${theme.colors.title};
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
    transition: 0.3s all linear;
&::before{
    content:'';
    bottom: 0;
    left: 0;
    position:absolute;
    width:100%;
    height:2px;
    transition: inherit;
    background-image:linear-gradient(90deg,${theme.colors.gradient.color2},${theme.colors.gradient.color1});
    background-color:red;
    z-index:1;

}
&:focus-within{
    &::before{
        background-image:linear-gradient(90deg,${theme.colors.gradient.color1});   
    }
}
`;


export const S = {
    FormField,
    Mask,
    FormFieldWrapper,
};