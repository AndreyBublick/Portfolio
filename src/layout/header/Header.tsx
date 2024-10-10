import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';



export const Header: FC = () => {
    return (<HeaderStyled>

        <Logo />
        <Menu />
        <div className='icons'>
            <Icon id={'git'} />
            <Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} />
            <Icon id={'in'} />
        </div>

    </HeaderStyled>);

}

const HeaderStyled = styled.header`
     &>a{
        margin-right:auto;
     }
     
display:flex;
gap:51px;
justify-content:space-between;
padding:41px 20px;
    background-color:${theme.colors.white};

.icons{
    display:flex;
    gap:20px;
}
`;


