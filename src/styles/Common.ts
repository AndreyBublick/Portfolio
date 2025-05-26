import { theme } from './theme';
import { FC } from 'react';


type propsType = {
    family?:string;
    weight?:100|200|300|400|500|600|700|800|900;
    color?:string;
    lineHeight?:number;
    fMin?:number;
    fMax?:number;
};

export const font=({family,weight,color,lineHeight,fMin,fMax}:propsType)=>`
font-family: ${family || 'Rubik'};
font-weight: ${weight || 400};
color: ${color || theme.colors.font};
line-height: ${lineHeight || 1.2 };
font-size: calc( (min(100vw, 1600px) - 360px)/(1600 - 360) * (${fMax} - ${fMin}) + ${fMin}px);

`; 