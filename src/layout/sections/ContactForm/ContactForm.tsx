import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Input } from '../../../components/input/Input';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Textarea } from '../../../components/textarea/Textarea';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <Container>

        <SectionTitle>Contact</SectionTitle>
        <SectionSubTitle>Send Me</SectionSubTitle>
        <FormStyled action="#" method='post'>
        <FlexWrapper alignItems={'center'} gap={15} flexDirection={'column'}>
        <Input placeholderBody={'your First Name'} />
        <Input placeholderBody={'your Last Name'}/>
        <Textarea />
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
const FormStyled = styled.form``;