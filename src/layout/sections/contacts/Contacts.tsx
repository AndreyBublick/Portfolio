


import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { GradientWord } from '../../../components/GradientWord';
import { theme } from '../../../styles/theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Contacts = () => {
    return <ContactsStyled>
<Container>

        <SectionTitle>
            <FlexWrapper gap={9} flexDirection={'column'} alignItems={'center'}>
                For any questions please mail me: <GradientWord>hi@pavanmg.in</GradientWord>

            </FlexWrapper>
        </SectionTitle>
        </Container>

    </ContactsStyled>

}

const ContactsStyled = styled.section`

h2{
    margin:0;
}
`;