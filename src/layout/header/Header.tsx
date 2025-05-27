import React, {FC, useState} from 'react';

import {Logo} from '../../components/logo/Logo';
import {FlexWrapper} from '../../components/FlexWrapper';
import {ListSocial} from '../../components/listSocial/ListSocial';
import {Container} from '../../components/Container';
import {S} from './Header_Styles';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';
import {useResize} from "../../hooks/useResize";


export const Header: FC = () => {

   const [links] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

   const isMobile =  useResize(1050);

   return (<S.Header>
      <Container>

         <FlexWrapper alignItems={'flex-start'} gap={54}>
            <Logo />

            <S.LinksWrapper alignItems={'center'} gap={50}>
            {isMobile ? <MobileMenu links={links} /> : <DesktopMenu links={links} />}
            {!isMobile && <ListSocial />}
         
            </S.LinksWrapper>
         </FlexWrapper>

      </Container>

   </S.Header>);

}






















