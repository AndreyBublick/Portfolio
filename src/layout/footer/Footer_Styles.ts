import styled from "styled-components";
import { theme } from "../../styles/theme";
import { font } from "../../styles/Common";
import { GradientWord } from "../../components/GradientWord";
import { FlexWrapper } from "../../components/FlexWrapper";







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
padding:13px 0px;
`;


const Footer = styled.footer`
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
    color:red;
    ${font({ family: 'DM Sans,sans-serif', color: 'transparent', lineHeight: 26 / 18, fMax: 18, fMin: 14 })};
    }
}





${FlexWrapper}>${FlexWrapper}:first-of-type{
    border-bottom:2px solid ${theme.colors.font};
    padding-bottom:35px;
    margin-bottom:45px;
a{
     color:inherit; 
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
    UsualText,
    Telephone,
    Email,
    LinksWrapper,
};