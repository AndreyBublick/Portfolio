


import React from 'react';
import { S } from './Testimony_Styles';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';

export const Testimony = () => {
    return <S.Testimony>
        <Container>
            <SectionTitle>Testimony</SectionTitle>
            <SectionSubTitle>Mony</SectionSubTitle>
          
            <S.TestimonyWrapper flexDirection={'column'} alignItems={'center'}>
                <S.IconWrapper>
                <Icon id={'REACT'} viewBox={"0 0 113 101"} width={113} height={101}  />
                </S.IconWrapper>
                 <Slider />
            </S.TestimonyWrapper>
        </Container>
    </S.Testimony>

}

