import React, { FC } from 'react'
import spriteSVG from '../../assets/images/code-svg.svg';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export type propsIconType = {
  id: string;
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string,
};
type svgStyledType = {
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string,
};


export const Icon: FC<propsIconType> = ({ id, width, height, viewBox, color }) => {
  return <SvgStyled color={color} width={width} height={height} viewBox={viewBox}>

    <use xlinkHref={`${spriteSVG}#${id}`}></use>
  </SvgStyled>
}



const Mask = styled.span``;


const SvgStyled = styled.svg.attrs<svgStyledType>(({ width, height, viewBox }) => ({
  width: width && width || '30',
  height: height && height || '30',
  viewBox: viewBox && viewBox || "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})) <svgStyledType>`
 fill:${({ color }) => color || 'currentColor'};
/* cursor: pointer; */


`;







