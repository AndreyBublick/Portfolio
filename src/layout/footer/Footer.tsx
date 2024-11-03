import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { ListSocial } from "../../components/listSocial/ListSocial";
import { Menu } from "../../components/menu/Menu";
import { FC, useEffect, useRef, useState } from "react";
import { GradientWord } from "../../components/GradientWord";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { GoTop } from "../../components/goTop/GoTop";






export const Footer:FC = () => {
    const [links, setLinks] = useState(['Home', 'About', 'Technologies', 'Projects', 'Contact',]);
    const [isMobile, setIsMobile] = useState(false);
   
 
const [linksContact,setLinksContact] = useState([{href:"tel:+91 12345 09876", title:'+91 12345 09876',},
  {title:'info@example.com', href:"mailto:info@example.com"}]);


   

   /* useEffect(()=>{
    if(!timer.current){
     
      
      
    
      timer.current = setTimeout(()=>{
        
        
        setIsShowGoTop(true);
        
        
       },4000);
    }
    
    return ()=>{
      if(!timer.current){
  clearInterval(timer.current);
} 
};
   },[]); */
   


    useEffect(() => {
         const resizeWindow = () => {
           if(window.innerWidth<=768){
             setIsMobile(true);
           }
           else{
             setIsMobile(false);
    
           }
         };
     
         window.addEventListener('resize', resizeWindow);
         resizeWindow(); // Инициализация при монтировании
     
         return () => {
           window.removeEventListener('resize', resizeWindow);
         };
       }, []);
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

                    <S.PS>  <S.Mask>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></S.Mask> <GradientWord><S.UsualText>Designed and built by</S.UsualText> Pavan MG <S.UsualText>with</S.UsualText> Love <S.UsualText>&</S.UsualText> Coffee</GradientWord> </S.PS>

                </FlexWrapper>
            </FlexWrapper>
        </Container>

    </S.Footer>

};

