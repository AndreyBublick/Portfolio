import React, { FC } from 'react';

import man from '../../../assets/images/man.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { GradientWord } from '../../../components/GradientWord';
import { Container } from '../../../components/Container';
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

            <S.Image>

                <div>
                    <img  src={man} alt={'Pavan MG'} />

                </div>
            </S.Image>
        </FlexWrapper>

        </Container>
    </S.Main>

}







