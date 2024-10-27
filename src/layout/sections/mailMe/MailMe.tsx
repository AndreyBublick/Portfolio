



import { SectionTitle } from '../../../components/SectionTitle';
import { GradientWord } from '../../../components/GradientWord';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

import { S } from './MailMe_Styles';

export const MailMe = () => {
    return <S.MailMe>
        <Container>

            <SectionTitle mBottom={'0px'} >
                <FlexWrapper gap={9} flexDirection={'column'} alignItems={'center'}>
                   For any questions please mail me: <GradientWord>hi@pavanmg.in</GradientWord>

                </FlexWrapper>
            </SectionTitle>
        </Container>

    </S.MailMe>

}
