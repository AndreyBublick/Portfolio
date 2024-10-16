import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import spriteSVG from '../../assets/images/code-svg.svg';
import { Icon } from '../icon/Icon';


export const Logo = () => {

    const homePage = useRef(document.querySelector('header'));

    const onClickAnchor = () => {
        homePage.current?.scrollIntoView({behavior:'smooth'});
    };

    return <Link aria-label='Логотип' onClick={onClickAnchor} to={'/'}>

        <Icon id='logo' width={97} height={59} viewBox="0 0 97 59" />

    </Link>
}
