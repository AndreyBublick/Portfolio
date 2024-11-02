
import { FC } from 'react';
import { S } from './Button_Styles';

 
type propsType = {
    textBody:string,
    onClick?:()=>void,
};

export const Button:FC<propsType> = ({textBody,onClick}) => {
  return (
    <S.Button onClick={onClick}>
      {textBody}
    </S.Button>
  )
}


