import {ComponentPropsWithoutRef, FC} from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { useScrollTop } from '../../hooks/scrollTop';
import {theme} from "../../styles/theme";
type propsType = {
    isDark?:boolean,
} & ComponentPropsWithoutRef<'div'>;

export const Logo:FC<propsType> = ({isDark}) => {


    const onClickAnchor = useScrollTop();

    return <LogoStyled>
        <Link aria-label='Логотип' onClick={onClickAnchor} to={'/'}>
            <Icon id={'logo'}  viewBox="0 0 200 200" />
        </Link>
    </LogoStyled>
}



const LogoStyled = styled.div`
margin-right: auto;
    a{
        display: inline-block;
        line-height: 0;
    }
svg{
    
    border-radius:0;
    width:64px; 
    height:64px;
    position:relative;
    
    &:hover{
        filter:none;
        outline:none;
    }
    @media ${theme.media.mobile}  {
        width:50px;
        height:50px;  
    }
    @media screen and (max-height: 375px)  {
        width:40px;
        height:40px;
    }
}
   
`;
