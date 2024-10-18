import React from 'react'
import styled from 'styled-components'

type propsType = {

    justifyContent?: 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start'|'flex-end' | 'center',
    flexDirection?: 'column',
    flexWrap?: 'wrap',
    gap?: number,
};


export const FlexWrapper = styled.div<propsType>`
display:flex;
justify-content:${props => props.justifyContent || 'flex-start'};
align-items:${props => props.alignItems || 'stretch'};
flex-direction:${props => props.flexDirection || 'row'};
flex-wrap:${props => props.flexWrap || 'nowrap'};
gap:${props=>props.gap ? `${props.gap}px`: `${0}px` };
height:100%;
`;
