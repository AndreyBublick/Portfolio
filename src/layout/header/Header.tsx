import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';



export const Header: FC = () => {
    return (<HeaderStyled>

        <Logo />
        <Menu />

    </HeaderStyled>);

}

const HeaderStyled = styled.header`
display:flex;
justify-content:space-between;
padding:41px 20px;
    background-color:${theme.colors.white};
`;


