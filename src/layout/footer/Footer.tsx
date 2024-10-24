import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ListSocial } from "../../components/listSocial/ListSocial";
import { theme } from "../../styles/theme";
import { Menu } from "../../components/menu/Menu";
import { useState } from "react";
import { GradientWord } from "../../components/GradientWord";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";





export const Footer = () => {
    const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

    return <FooterStyled>
        <Container>

            <FlexWrapper flexDirection={"column"} justifyContent={"center"}>


                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo isDark />

                    <FlexWrapper gap={15} alignItems={"center"} justifyContent={"space-between"}>
                        <Telephone href="tel:+1 555 505 5050">+1 555 505 5050</Telephone>
                        <Email href="mailto:info@designmodo.com">info@designmodo.com</Email>

                        <ListSocial />
                    </FlexWrapper>

                </FlexWrapper>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Menu links={links} fz={'18px'} />

                    <PS>  <Mask>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></Mask> <GradientWord><UsualText>Designed and built by</UsualText> Pavan MG <UsualText>with</UsualText> Love <UsualText>&</UsualText> Coffee</GradientWord> </PS>

                </FlexWrapper>
            </FlexWrapper>
        </Container>

    </FooterStyled>

};



const PS = styled.small`
font-size: 18px;
line-height: calc(26/18);



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
font-size: 12px;
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



const FooterStyled = styled.footer`
padding-top:100px;
padding-bottom:60px;
background-color:${theme.colors.primaryBg};





color:${theme.colors.title}; ///main color





${FlexWrapper}>${FlexWrapper}{
    flex:0 0 55%; 
    a{
        white-space:nowrap;
        
        ${font({family:'DM Sans,sans-serif',color:'transparent',lineHeight:26/18,fMax:18,fMin:14})};

    }
   
}






${FlexWrapper}>${FlexWrapper}:first-of-type{
    border-bottom:2px solid ${theme.colors.font};
    padding-bottom:40px;
    margin-bottom:45px;
a{
     color:inherit; 
}
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
`;


