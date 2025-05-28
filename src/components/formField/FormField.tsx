import React, {ChangeEvent, FC, FormEvent, useContext} from 'react'
import {useInput} from '../../hooks/useInput';
import {S} from './FormField_Styles';
import {formDataFields} from '../../layout/sections/сontactForm/ContactForm';
import {HandleSubmitContext} from '../../context/HandleSubmitContext';


type names = keyof formDataFields;

type propsType = {
    placeholderBody: string,
    inputType?: 'password' | 'submit' | 'number'| 'email',
    name:names,
    as?:React.ElementType,
    onInput?:(e:ChangeEvent<HTMLInputElement>&FormEvent<HTMLTextAreaElement>)=>void,
   /*  sent:boolean, */

};

export const FormField: FC<propsType> = ({ placeholderBody,as,name,inputType,onInput }) => {
    
    const sent = useContext(HandleSubmitContext)?.sent as boolean;
    const { value, changeValue } = useInput(sent);
    
    return <S.FormFieldWrapper>
        
      <S.FormField type={inputType} required as={as} value={value}  onInput={
        (e:ChangeEvent<HTMLInputElement>&FormEvent<HTMLTextAreaElement>)=>{ onInput && onInput(e);changeValue(e,sent);} } name={name} placeholder={placeholderBody}></S.FormField>   
      <S.Mask>{placeholderBody}</S.Mask>
    </S.FormFieldWrapper>
}








