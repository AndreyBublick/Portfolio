import styled from "styled-components";
import { theme } from "../../styles/theme";

const ListSocial = styled.ul`
display:flex;
gap:20px;
padding:5px 0;
/* @media ${theme.media.desktop} {
      display:none;
      
   } */
`;


const ListLink = styled.a`
    color:inherit;
display:flex;
align-items:center;


& > svg{
 border-radius:50%;
 transition:all 0.3s linear;
outline:2px solid transparent;

position: relative;

&:hover{
  outline:2px solid ${theme.colors.gradient.color1};


  color:white;
  filter:drop-shadow( 0px 0px 3px ${theme.colors.gradient.color2});
}
}

`;

export const S = {
    ListSocial,
    ListLink,  
}; 