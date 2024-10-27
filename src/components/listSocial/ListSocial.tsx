


import React, { FC } from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { S } from './ListSocial_Styles';


export const ListSocial: FC = () => {
    return <S.ListSocial>
        <li  ><S.ListLink aria-label='Git hub ссылка' href="#"><Icon id={'git'} /></S.ListLink></li>
        <li ><S.ListLink aria-label='Еwitter ссылка' href="#"><Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} /></S.ListLink></li>
        <li ><S.ListLink aria-label='LinkedIn ссылка' href="#"><Icon id={'in'} /></S.ListLink></li>
    </S.ListSocial>
}

