import React, { FC, useEffect, useState } from 'react';

import { Logo } from '../../components/logo/Logo';
import { FlexWrapper } from '../../components/FlexWrapper';
import { ListSocial } from '../../components/listSocial/ListSocial';
import { Container } from '../../components/Container';
import { S } from './Header_Styles';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';



export const Header: FC = () => {

   const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);
   const [isMobile, setIsMobile] = useState(false);
   const [isShowSocial, setIsShowSocial] = useState(true);

  



   useEffect(() => {
      const resizeWindow = () => {
         if (window.innerWidth <= 768) {
            setIsMobile(true);
         }
         else {
            setIsMobile(false);

         }
      };

      window.addEventListener('resize', resizeWindow);
      resizeWindow(); // Инициализация при монтировании

      return () => {
         window.removeEventListener('resize', resizeWindow);
      };
   }, []);
   useEffect(() => {
      const onResizeWindow = () => {
         if (window.innerWidth <= 1200) {
            setIsShowSocial(false);
         }
         else {
            setIsShowSocial(true);

         }
      };

      window.addEventListener('resize', onResizeWindow);
      onResizeWindow(); // Инициализация при монтировании

      return () => {
         window.removeEventListener('resize', onResizeWindow);
      };
   }, []);

   return (<S.Header>
      <Container>


         <FlexWrapper alignItems={'flex-start'}  /* justifyContent={'space-between'} */ gap={54}>
            <Logo />
            

            <S.LinksWrapper alignItems={'center'} gap={50}>
            {isMobile ? <MobileMenu links={links} /> : <DesktopMenu links={links} />}
            {isShowSocial && <ListSocial />}
         
            </S.LinksWrapper>
         </FlexWrapper>


      </Container>





   </S.Header>);

}






















