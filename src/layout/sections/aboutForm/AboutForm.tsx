import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/theme';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Input } from '../../../components/input/Input';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Textarea } from '../../../components/textarea/Textarea';

export const AboutForm = () => {
  return (
    <AboutFormStyled>
        <SectionTitle>Contact</SectionTitle>
        <SectionSubTitle>Send Me</SectionSubTitle>
        <FormStyled action="#" method='post'>
        <FlexWrapper alignItems={'center'} gap={15} flexDirection={'column'}>
        <Input />
        <Input />
        <Textarea />
        <button>SEND</button>
        </FlexWrapper>
        
        </FormStyled>
    </AboutFormStyled>
  )
}

const AboutFormStyled = styled.section`
max-width:${theme.container.width};
width:100%;
padding:0 ${theme.container.leftAndRight};
margin: 0 auto;
&>span{
  margin-bottom:48px;
}
`;
const FormStyled = styled.form``;