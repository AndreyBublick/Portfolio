import styled from "styled-components";
import { theme } from "../../styles/theme";
import { font } from "../../styles/Common";
import { GradientWord } from "../../components/GradientWord";
import { FlexWrapper } from "../../components/FlexWrapper";



const MaskEffect = styled.span`
  color: inherit;
  transition: inherit;
  position: absolute;
  overflow: hidden;
  z-index: -1;

  ${font({ family: 'DM Sans,sans-serif',color:theme.colors.title,  lineHeight: 26 / 18, fMax: 18, fMin: 14 })};

  width: 100%;
  height: 50%;

  & > span {
    position: absolute;
    /* overflow:hidden; */
    transition: inherit;
    width: 100%;
    height: 100%;
  }

  &:first-of-type {
    top: 0%;
    left: 0%;

    & > span {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &:last-of-type {
    left: 0;
    bottom: 0%;

    & > span {
      top: -50%;
      transform: translateY(-50%);
    }
  }
`;

const Link = styled.div`
transition: all 0.2s ease-in;
position: relative;
z-index: 0;

a::before {
      transition: inherit;
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    width: 120%;
    top: 50%;
    left: 50%;
    height: 2px;
    background-color: ${theme.colors.title};

    transform: translate(-50%, -50%);
    opacity: 0;
  }

@media ${theme.media.hover} {
  &:hover {
    a::before {
      opacity: 1;
    }
    ${MaskEffect}:first-of-type {
      transform: translate(3%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color1};
      }
    }
    ${MaskEffect}:last-of-type {
      transform: translate(-5%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color2};
      }
    }
  }
}
@media ${theme.media.notHover} {
  &:active {
    


    ${MaskEffect}:first-of-type {
      transform: translate(3%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color1};
      }
    }
    ${MaskEffect}:last-of-type {
      transform: translate(-5%, -0%) skew(15deg);

      & > span {
        color: ${theme.colors.gradient.color2};
      }
    }
  }
}
a:active {
    &::before {
      opacity: 1;
    }
    }
`;









const PS = styled.small`

${font({ color: 'inherit', lineHeight: 26 / 18, fMax: 18, fMin: 12 })}

position:relative;
z-index:0;




${GradientWord}{
z-index:-1;
line-height:inherit;

    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
& > span{
    background-color:${theme.colors.primaryBg};
}
}


@media ${theme.media.mobile} {

text-align:center;
    
}
`;

const Mask = styled.span`
color:${theme.colors.font};
span{
    color:transparent;

}
`;



const UsualText = styled.span`
background-image: linear-gradient(270deg, transparent);
-webkit-background-clip: border-box;
  -webkit-text-fill-color: inherit; /* Для поддержки WebKit-браузеров */
  background-clip: border-box; /* Для остальных браузеров */
  
`;
const Telephone = styled.a`

`;
const Email = styled.a`

`;
const LinksWrapper = styled(FlexWrapper)`
/* display:flex; */
padding:13px 0px;
/* gap: 35px;
align-items:center;
justify-content:space-between;
 */
`;


const Footer = styled.footer`
position: relative;
padding-top:100px;
padding-bottom:60px;
background-color:${theme.colors.primaryBg};





color:${theme.colors.title}; ///main color





${FlexWrapper}>${FlexWrapper}{
    flex:0 0 51%; 
    a{
        white-space:nowrap;
        
        

    }
    
}
${FlexWrapper}>${FlexWrapper}:first-of-type{
    a{
    
    ${font({ family: 'DM Sans,sans-serif',  lineHeight: 26 / 18, fMax: 18, fMin: 14 })};
    }
}





${FlexWrapper}>${FlexWrapper}:first-of-type{
    border-bottom:2px solid ${theme.colors.font};
    padding-bottom:35px;
    margin-bottom:45px;
a{
    transition:0.2s;
     color:inherit; 

     
}
}
${FlexWrapper}>${FlexWrapper}:first-of-type{
   ${Link} >a{
    color:transparent;
    }
}
${FlexWrapper}>${FlexWrapper}> nav > ul{
gap:52px;
}





@media ${theme.media.mobile} {
    ${FlexWrapper}>${FlexWrapper}:first-of-type>${FlexWrapper} {
flex-direction:column;
align-items:flex-end;
    
}  
    }
@media ${theme.media.desktop} {
    ${FlexWrapper}>${FlexWrapper} > nav{
    display:none;   
   
}    
${PS}{
margin:0 auto;
}
}
@media ${theme.media.mobile} {
    padding-top:0;
    padding-bottom:45px;
}
`;


export const S = {
    Footer,
    PS,
    Mask,
    MaskEffect,
    UsualText,
    Telephone,
    Email,
    LinksWrapper,
    Link,
};