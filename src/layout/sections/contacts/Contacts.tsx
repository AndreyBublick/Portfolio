


import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { GradientWord } from '../../../components/GradientWord';
import { theme } from '../../../styles/theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Contacts = () => {
    return <ContactsStyled>

        <SectionTitle>
            <FlexWrapper gap={9} flexDirection={'column'} alignItems={'center'}>
                For any questions please mail me: <GradientWord>hi@pavanmg.in</GradientWord>

            </FlexWrapper>
        </SectionTitle>

    </ContactsStyled>

}

const ContactsStyled = styled.section`
max-width:${theme.container.width};
width:100%;
padding:0 ${theme.container.leftAndRight};
margin: 0 auto;
h2{
    margin:0;
}
`;