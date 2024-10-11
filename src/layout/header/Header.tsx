import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';



export const Header: FC = () => {
    return (<HeaderStyled>

        <Logo />
        <Menu />
        <FlexWrapper gap={20}>
            <Icon id={'git'} />
            <Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} />
            <Icon id={'in'} />
        </FlexWrapper>

    </HeaderStyled>);

}

const HeaderStyled = styled.header`
max-width:1240px;
padding:0 20px;
margin: 0 auto;



     &>a{
        margin-right:auto;
     }
     
display:flex;
gap:51px;
justify-content:space-between;
padding:41px 20px;
    background-color:${theme.colors.white};


`;


