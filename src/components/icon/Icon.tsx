import React, { FC } from 'react'
import spriteSVG from '../../assets/images/code-svg.svg';
import styled from 'styled-components';

type propsType = {
  id: string;
  width?: number;
  height?: number;
  viewBox?: string;
};


export const Icon: FC<propsType> = ({ id, width, height, viewBox }) => {
  return <SvgStyled width={width && width || '30'} height={height && height || '30'} viewBox={viewBox && viewBox || "0 0 30 30"} fill="none" xmlns="http://www.w3.org/2000/svg">

    <use xlinkHref={`${spriteSVG}#${id}`}></use>
  </SvgStyled>
}

const SvgStyled = styled.svg`
 fill:orange;
`;






