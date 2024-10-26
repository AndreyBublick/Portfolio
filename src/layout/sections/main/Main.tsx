import React, { FC } from 'react';

import man from '../../../assets/images/man.webp';
import styled from 'styled-components';
import { spin } from '../../../styles/animations/animations';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/theme';
import { GradientWord } from '../../../components/GradientWord';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';
import { S } from './Main_Styles';

export const Main:FC = () => {
    return <S.Main>
        <Container>
  
        
        <FlexWrapper gap={15}  alignItems={'center'} flexWrap={'wrap'}> 
            <S.Title>
                Hi <S.Hand>👋</S.Hand><S.Dot>,</S.Dot><br />
                My name is<br />
                <GradientWord>Pavan MG</GradientWord>
                I build things for web
            </S.Title>

            <div className='image'>

                <div className='image_body'>
                    <img src={man} alt={'Pavan MG'} />

                </div>
            </div>
        </FlexWrapper>

        </Container>
    </S.Main>

}







