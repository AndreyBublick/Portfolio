import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ListLink } from "../../components/listLink/ListLink";
import { theme } from "../../styles/theme";
import { Menu } from "../../components/menu/Menu";
import { useState } from "react";
import { GradientWord } from "../../components/GradientWord";





export const Footer = () => {
    const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

    return <FooterStyled>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
            <Logo />

            <FlexWrapper alignItems={"center"} justifyContent={"space-between"}>
                <Telephone href="tel:+1 555 505 5050">+1 555 505 5050</Telephone>
                <Email href="mailto:info@designmodo.com">info@designmodo.com</Email>

                <ListLink />
            </FlexWrapper>

        </FlexWrapper>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
            <Menu FZ={'18px'} links={links} />

            <PS>Designed and built by <GradientWord>Pavan MG</GradientWord> with <GradientWord>Love</GradientWord> & <GradientWord>Coffee</GradientWord></PS>

        </FlexWrapper>
    </FooterStyled>

};

const FooterStyled = styled.footer`

max-width:1240px;
width:100%;

padding:0 20px 60px;
margin: 0 auto;
color:${theme.colors.title};
&>div>div{
    color:inherit;
    flex:0 0 55%; 
    a{
        color:inherit;
        font-family: DM Sans;
        font-size: 18px;
        line-height: calc(26/18);
        

    }
    ul{
        
    }
}

&>div:first-child {
    border-bottom:2px solid ${theme.colors.text};
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
line-height: calc(26/18) ;
span{

display:inline;
}

`;


