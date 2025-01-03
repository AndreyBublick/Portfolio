



import React, { FC } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/theme';

export const Map:FC = () => {
    return <MapStyled>
        <Container>
        <FlexWrapper flexDirection={'column'} >
        

        

            <IframeStyled title='Map'  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11283.001070440829!2d39.035928985827134!3d45.00969303095073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f050080bcf0dd9%3A0x3f3a8bcb798735ec!2z0JzQtdC00LjQsNCf0LvQsNC30LA!5e0!3m2!1sru!2sfr!4v1729106915947!5m2!1sru!2sfr"}
                height={"450"}
                style={{ border: 0 }}
                allowFullScreen={false} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </IframeStyled>
            </FlexWrapper>
            </Container>
        </MapStyled>
    
}



const MapStyled = styled.section`
position:relative;
@media ${theme.media.mobile} {
    padding-top:0;
}
`;
const IframeStyled = styled.iframe`

 
outline:1px solid ${theme.colors.title};


@media ${theme.media.tablet} {
height:300px;
}
@media screen and (max-width:450px) {
height:250px;
}


`;

