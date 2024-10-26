


import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { GradientWord } from '../../../components/GradientWord';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/theme';

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

letter-spacing: 1.2px;

${font({color:theme.colors.title ,family:'DM Sans, sans-serif',fMax:58,fMin:40, weight:700,lineHeight:70/58})}

${GradientWord}{
letter-spacing: 0.5px;

}

}
`;