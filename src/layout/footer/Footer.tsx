import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ListSocial } from "../../components/listSocial/ListSocial";
import { Menu } from "../../components/menu/Menu";
import { FC, useState } from "react";
import { GradientWord } from "../../components/GradientWord";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";
import {useResize} from "../../hooks/useResize";







export const Footer:FC = () => {
    const [links] = useState(['Home', 'About', 'Technologies', 'Projects', 'Contact',]);

const [linksContact] = useState([{href:"tel:+79892682290", title:'+7-989-268-22-90',},
  {title:'shamara_andrey@mail.ru', href:"mailto:shamara_andrey@mail.ru"}]);



   const isMobile =  useResize();

    return <S.Footer>
     
        <Container>

            <FlexWrapper flexDirection={"column"} justifyContent={"center"}>


                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                    <Logo isDark />

                    <S.LinksWrapper gap={35} alignItems={"center"} justifyContent={"space-between"}>

                      {linksContact.map((link)=><S.Link key={link.href}>
                        <a href={link.href}>{link.title}</a>
                        <S.MaskEffect><span>{link.title}</span></S.MaskEffect>
                        <S.MaskEffect><span>{link.title}</span></S.MaskEffect>
                      </S.Link>)}



                        {!isMobile && <ListSocial />} 
                    </S.LinksWrapper>

                </FlexWrapper>
                <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
                 <Menu scrollTop links={links} fz={'18px'} /> 

                    <S.PS>  <S.Mask>Спроектировано <span>Андрей Ш.Р</span> на <span>Вдохновении</span> & <span>Кофе</span></S.Mask> <GradientWord><S.UsualText>Спроектировано</S.UsualText> Андрей Ш.Р <S.UsualText>на</S.UsualText> Вдохновении <S.UsualText>&</S.UsualText> Кофе</GradientWord> </S.PS>

                </FlexWrapper>
            </FlexWrapper>
        </Container>

    </S.Footer>

};

