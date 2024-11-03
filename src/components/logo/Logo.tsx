import  { FC } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { useScrollTop } from '../../hooks/scrollTop';

type propsType = {
    isDark?:boolean,
};

export const Logo:FC<propsType> = ({isDark}) => {

    /* const homePage = useRef(document.getElementById('root'));


    const onClickAnchor = () => {
        homePage.current?.scrollIntoView({ behavior: 'smooth' });
    }; */

    const onClickAnchor = useScrollTop();

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
