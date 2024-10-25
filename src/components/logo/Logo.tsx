import React, { FC, useRef } from 'react'
import { Link } from 'react-router-dom';
import spriteSVG from '../../assets/images/code-svg.svg';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type propsType = {
    isDark?:boolean,
};

export const Logo:FC<propsType> = ({isDark}) => {

    const homePage = useRef(document.getElementById('root'));


    const onClickAnchor = () => {
        homePage.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <LogoStyled>
        <Link aria-label='Логотип' onClick={onClickAnchor} to={'/'}>

           {!isDark && <Icon id='logo' width={97} height={59} viewBox="0 0 97 59" />} 
           {isDark && <Icon id='logoDark' width={97} height={59} viewBox="0 0 97 59" />} 

        </Link>
    </LogoStyled>
}
const LogoStyled = styled.div`
margin-right: auto;
svg{
   
    border-radius:0;


    &:hover{
        filter:none;
        outline:none;
    }

}
`;
