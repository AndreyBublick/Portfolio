import React, { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { ListLink } from '../../components/listLink/ListLink';
import { Container } from '../../components/Container';



export const Header: FC = () => {

   const [links, setLinks] = useState(['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]);

   return (<HeaderStyled>
      <Container>
         <FlexWrapper justifyContent={'space-between'} gap={51}>
            <Logo />
            <Menu links={links} />


            <ListLink />
         </FlexWrapper>


      </Container>





   </HeaderStyled>);

}

const HeaderStyled = styled.header`

color:${theme.colors.text};



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




padding:41px 20px;
background-color:${theme.colors.white};


`;


