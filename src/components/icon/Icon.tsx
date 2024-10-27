import React, { FC } from 'react'
import spriteSVG from '../../assets/images/code-svg.svg';

import { S } from './Icon_Styles';

export type propsIconType = {
  id: string;
  width?: number;
  height?: number;
  viewBox?: string;
  color?: string,
};



export const Icon: FC<propsIconType> = ({ id, width, height, viewBox, color }) => {
  return <S.Svg color={color} width={width} height={height} viewBox={viewBox}>

    <use xlinkHref={`${spriteSVG}#${id}`}></use>
  </S.Svg>
}
















