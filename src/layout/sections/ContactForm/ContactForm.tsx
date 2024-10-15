import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/theme';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Input } from '../../../components/input/Input';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Textarea } from '../../../components/textarea/Textarea';
import { Button } from '../../../components/button/Button';

export const ContactForm = () => {
  return (
    <ContactFormStyled>
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
    </ContactFormStyled>
  )
}

const ContactFormStyled = styled.section`
max-width:${theme.container.width};
width:100%;
padding:0 ${theme.container.leftAndRight};
margin: 0 auto;
&>span{
  margin-bottom:48px;
}
`;
const FormStyled = styled.form``;