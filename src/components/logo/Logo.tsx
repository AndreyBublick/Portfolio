import React from 'react'
import { Link } from 'react-router-dom';
import spriteSVG from '../../assets/images/code-svg.svg';
import { Icon } from '../icon/Icon';


export const Logo = () => {
    return <Link to={'/home'}>
        
        <Icon id='logo' width='97' height='59' viewBox="0 0 97 59" />

    </Link>
}
