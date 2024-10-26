import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { FormField } from '../../../components/formField/FormField';

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <Container>

        <SectionTitle>Contact</SectionTitle>
        <SectionSubTitle>Send Me</SectionSubTitle>
        <FormStyled action="#" method='post'>
        <FlexWrapper alignItems={'center'} gap={15} flexDirection={'column'}>
        <FormField placeholderBody={'your First Name'} />
        <FormField placeholderBody={'your Last Name'}/>
        <FormField as={'textarea'} placeholderBody={'your message'}/>
      
    
        <Button textBody={'send'} />
        </FlexWrapper>
        
        </FormStyled>
           
      </Container>
    </ContactFormStyled>
  )
}

const ContactFormStyled = styled.section`

&>span{
  margin-bottom:48px;
}
`;
const FormStyled = styled.form`
margin:0 auto;
max-width:710px;


`;