
import { FC } from 'react';
import { S } from './Button_Styles';

 
type propsType = {
    textBody:string,
};

export const Button:FC<propsType> = ({textBody}) => {
  return (
    <S.Button>
      {textBody}
    </S.Button>
  )
}


