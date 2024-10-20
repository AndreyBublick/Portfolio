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



export const Header: FC = () => {

   const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

   return (<HeaderStyled>
      <Container>
         <FlexWrapper justifyContent={'space-between'} gap={51}>
            <Logo />
            <Menu links={links} />


            <ListSocial />
         </FlexWrapper>


      </Container>





   </HeaderStyled>);

}

const HeaderStyled = styled.header`
position:sticky;
top:0;
left:0;
z-index:999;
color:${theme.colors.font};
padding:41px 20px;
background-color:${theme.colors.primaryBg};



     ${Container}>a{
        margin-right:auto;
     }
     ${Container}>nav>ul>li>a{
        color:inherit;

     }
     ${Container}>ul>li>a{
        color:inherit;

     }
     

     ${Container}>${FlexWrapper}{

     }







`;


