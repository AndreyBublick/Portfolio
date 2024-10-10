import React, { FC } from 'react'
import spriteSVG from '../../assets/images/code-svg.svg';

type propsType = {
  id: string;
  width?: string;
  height?: string;
  viewBox?:string;
};

export const Icon: FC<propsType> = ({ id,width,height,viewBox }) => {
  return <svg width={width && width||'30'} height={height && height||'30'} viewBox={viewBox && viewBox || "0 0 30 30"} fill="none" xmlns="http://www.w3.org/2000/svg">

    <use xlinkHref={`${spriteSVG}#${id}`}></use>
  </svg>
}


