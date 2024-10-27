import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { FormField } from '../../../components/formField/FormField';
import { S } from './ContactForm_Styles';

export const ContactForm = () => {
  return (
    <S.ContactForm>
      <Container>

        <SectionTitle>Contact</SectionTitle>
        <SectionSubTitle>Send Me</SectionSubTitle>
        <S.Form action="#" method='post'>
        <FlexWrapper alignItems={'center'} gap={15} flexDirection={'column'}>
        <FormField placeholderBody={'your First Name'} />
        <FormField placeholderBody={'your Last Name'}/>
        <FormField as={'textarea'} placeholderBody={'your message'}/>
      
    
        <Button textBody={'send'} />
        </FlexWrapper>
        
        </S.Form>
           
      </Container>
    </S.ContactForm>
  )
}
