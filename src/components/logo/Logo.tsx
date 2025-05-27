import  { FC } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { useScrollTop } from '../../hooks/scrollTop';
type propsType = {
    isDark?:boolean,
};

export const Logo:FC<propsType> = ({isDark}) => {


    const onClickAnchor = useScrollTop();

    return <LogoStyled>
        <Link aria-label='Логотип' onClick={onClickAnchor} to={'/'}>
            <Icon id={'logo'} width={64} height={64} viewBox="0 0 200 200" />
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

position:relative;
    
    &:hover{
        filter:none;
        outline:none;
    }

}
`;
