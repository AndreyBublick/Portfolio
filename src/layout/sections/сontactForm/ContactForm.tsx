import  { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { FormField } from '../../../components/formField/FormField';
import { S } from './ContactForm_Styles';
import emailjs from '@emailjs/browser';
import { HandleSubmitContext } from '../../../context/HandleSubmitContext';


emailjs.init('JATD2Y0X_IKx-MWjM');

export type formDataFields = {
  'user_email':string,
  'user_name':string,
  'user_message':string,
};  

export const ContactForm = () => {
const [sent,setSent] = useState(false);
  const [formData,setFormData] = useState<formDataFields>({
    user_name:'',
    user_email:'',
    user_message:'',

  });



const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    emailjs.send('service_vh9wo8x', 'template_fdzp1nd', formData)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Ваше сообщение успешно отправлено!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Произошла ошибка при отправке сообщения.');
    }).finally(()=>{
      
      setSent(false);

    })
    setFormData({
      user_name:'',
      user_email:'',
      user_message:'',
    });
    /* document.querySelectorAll('input').forEach(inp=>inp.value=''); */
};
 const onInput = useCallback((e:ChangeEvent<HTMLInputElement>&FormEvent<HTMLTextAreaElement>)=>{
  
const value = e.target.value;
const name = e.target.name;

  setFormData( prev=> { return {...prev,[name]:value}});

},[]);




  return (
<HandleSubmitContext.Provider value={{sent,setSent}}>
<S.ContactForm>
      <Container>

        <SectionTitle>Контакт</SectionTitle>
        <SectionSubTitle>Написать мне прямо сейчас</SectionSubTitle>
        <S.Form onSubmit={handleSubmit}>
          
        <FlexWrapper alignItems={'center'} gap={40} flexDirection={'column'}>
        <FormField  onInput={onInput} placeholderBody={'your First Name'} name={'user_name'}/>
        <FormField  onInput={onInput} inputType={'email'} placeholderBody={'your Email'} name={'user_email'}/>
        <FormField  onInput={onInput} as={'textarea'} placeholderBody={'your message'} name={'user_message'}/>
      
    
        <Button textBody={'send'} />
        </FlexWrapper>
        
        </S.Form>
           
      </Container>
    </S.ContactForm>
    </HandleSubmitContext.Provider>
  )
}
