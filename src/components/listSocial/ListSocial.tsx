


import React, { FC } from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components';


export const ListSocial: FC = () => {
    return <ListSocialStyled>
        <li  ><ListLink aria-label='Git hub ссылка' href="#"><Icon id={'git'} /></ListLink></li>
        <li ><ListLink aria-label='Еwitter ссылка' href="#"><Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} /></ListLink></li>
        <li ><ListLink aria-label='LinkedIn ссылка' href="#"><Icon id={'in'} /></ListLink></li>
    </ListSocialStyled>
}

const ListSocialStyled = styled.ul`
display:flex;
gap:20px;


`;


const ListLink = styled.a`

    color:inherit;
display:flex;
align-items:center;




`;