import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ListSocial } from "../../components/listSocial/ListSocial";
import { theme } from "../../styles/theme";
import { Menu } from "../../components/menu/Menu";
import { useState } from "react";
import { GradientWord } from "../../components/GradientWord";
import { Container } from "../../components/Container";





export const Footer = () => {
    const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

    return <FooterStyled>
        <Container>

            <FlexWrapper flexDirection={"column"} justifyContent={"center"}>


                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo />

                    <FlexWrapper alignItems={"center"} justifyContent={"space-between"}>
                        <Telephone href="tel:+1 555 505 5050">+1 555 505 5050</Telephone>
                        <Email href="mailto:info@designmodo.com">info@designmodo.com</Email>

                        <ListSocial />
                    </FlexWrapper>

                </FlexWrapper>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Menu  links={links} />

                    <PS> <GradientWord><UsualText>Designed and built by</UsualText> Pavan MG <UsualText>with</UsualText> Love <UsualText>&</UsualText> Coffee</GradientWord> </PS>

                </FlexWrapper>
            </FlexWrapper>
        </Container>

    </FooterStyled>

};
const PS = styled.small`
font-size: 18px;
line-height: calc(26/18);

span{

display:inline;
}

`;



const FooterStyled = styled.footer`
padding-top:100px;
padding-bottom:60px;
background-color:${theme.colors.primaryBg};





color:${theme.colors.title}; ///main color





${FlexWrapper}>${FlexWrapper}{
    flex:0 0 55%; 
    a{
        
        font-family: DM Sans;
        font-size: 18px;
        line-height: calc(26/18);
        

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

${FlexWrapper}>${FlexWrapper}:first-of-type{
    border-bottom:2px solid ${theme.colors.font };
    padding-bottom:40px;
    margin-bottom:45px;
a{
     color:inherit; 
}
}

nav{
    font-size: 18px;  
    ul > li > span {
        &:first-of-type{
        top: 0%;
        left:0%;
        &>span{
            top:60%;
            transform:translateY(-50%);
    }
    }

    &:last-of-type{
        left:0;
        bottom:0%;
    

    & > span{
      
        top:-40%;
        transform:translateY(-50%);
        

    
    }
    }
    } 
}
`;













const UsualText = styled.span`
background-image: linear-gradient(270deg, ${theme.colors.title},${theme.colors.title});
-webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Для поддержки WebKit-браузеров */
  background-clip: text; /* Для остальных браузеров */
  
`;
const Telephone = styled.a`
`;
const Email = styled.a`
`;



