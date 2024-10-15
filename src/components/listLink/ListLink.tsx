


import React, { FC } from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components';

type propstType = {
    color:``;
};

export const ListLink: FC = () => {
    return <ListLinkStyled>
        <li><a href="#"><Icon id={'git'} /></a></li>
        <li><a href="#"><Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} /></a></li>
        <li><a href="#"><Icon id={'in'} /></a></li>
    </ListLinkStyled>
}

const ListLinkStyled = styled.ul`
display:flex;
gap:20px;

a{
display:flex;
align-items:center;
}
`;