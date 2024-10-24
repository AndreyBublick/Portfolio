import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { ListSocial } from '../../components/listSocial/ListSocial';
import { Container } from '../../components/Container';
import { MobileMenu } from './mobileMenu/MobileMenu';



export const Header: FC = () => {

   const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

   return (<HeaderStyled>
      <Container>


         <FlexWrapper  justifyContent={'space-between'} gap={50}>
            <Logo />
            <Menu links={links} />
            <MobileMenu links={links} />
            <ListSocial />
         </FlexWrapper>


      </Container>





   </HeaderStyled>);

}




// Создаю стилизованный компонент, оборачивая Menu




const HeaderStyled = styled.header`


position:fixed; ///safari debug
top:0;
left:0;
z-index:999;
width:100%;
color:${theme.colors.font};
padding:40px 0px;
background-color:${theme.colors.primaryBg};

font-size:20px;



     





@media ${theme.media.tablet} {
   ${FlexWrapper}{
      align-items:center;
   }
   
}



   @media ${theme.media.tablet} {
      ${FlexWrapper} > nav{display:none;
      
   }
}
   @media ${theme.media.tablet} {
      ${FlexWrapper} > div:last-of-type{  
          display:block;
      
   }
}
@media ${theme.media.tablet}{
   padding:20px 0px;
}
@media ${theme.media.mobile}  {
   padding:10px 0px; 
}

`;













