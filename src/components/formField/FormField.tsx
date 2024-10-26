
import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';
import { useInput } from '../../hooks/useInput';
import { S } from './FormField_Styles';


type propsType = {
    placeholderBody: string,
    inputType?: 'password' | 'submit' | 'number',
    as?:React.ElementType,

};

export const FormField: FC<propsType> = ({ placeholderBody,as }) => {
    const { value, changeValue } = useInput();
    return <S.FormFieldWrapper>
        
      <S.FormField as={as} value={value} onInput={changeValue} name='name' placeholder={placeholderBody}></S.FormField>   
      <S.Mask>{placeholderBody}</S.Mask>
    </S.FormFieldWrapper>
}








