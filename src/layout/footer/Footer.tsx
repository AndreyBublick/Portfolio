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

            <FlexWrapper flexDirection={"column"}>


                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo />

                    <FlexWrapper alignItems={"center"} justifyContent={"space-between"}>
                        <Telephone href="tel:+1 555 505 5050">+1 555 505 5050</Telephone>
                        <Email href="mailto:info@designmodo.com">info@designmodo.com</Email>

                        <ListSocial />
                    </FlexWrapper>

                </FlexWrapper>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Menu FZ={'18px'} links={links} />

                    <PS>Designed and built by <GradientWord>Pavan MG</GradientWord> with <GradientWord>Love</GradientWord> & <GradientWord>Coffee</GradientWord></PS>

                </FlexWrapper>
            </FlexWrapper>
        </Container>

    </FooterStyled>

};

const FooterStyled = styled.footer`
padding-top:100px;
padding-bottom:60px;
background-color:${theme.colors.primaryBg};


${Container} > ${FlexWrapper} > div{
width:100%;
}


color:${theme.colors.title};

${FlexWrapper}>${FlexWrapper}{
    color:inherit;
    flex:0 0 55%; 
    a{
        
        font-family: DM Sans;
        font-size: 18px;
        line-height: calc(26/18);
        

    }
   
}
${FlexWrapper}>${FlexWrapper}:first-of-type{
a{
     color:inherit; 
}
}
${FlexWrapper}>${FlexWrapper}:first-child {
    border-bottom:2px solid ${theme.colors.font };
    padding-bottom:40px;
    margin-bottom:45px;
}

`;

const Telephone = styled.a`
`;
const Email = styled.a`
`;
const PS = styled.small`
font-size: 18px;
line-height: calc(26/18);

span{

display:inline;
}

`;


