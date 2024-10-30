import React, { FC } from 'react';

import man from '../../../assets/images/man.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { GradientWord } from '../../../components/GradientWord';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';



import Tilt from 'react-parallax-tilt';




export const Main: FC = () => {
    return <S.Main>
        <Container>


            <FlexWrapper gap={15} alignItems={'center'} flexWrap={'wrap'}>
                <S.Title>

                    Hi <S.Hand>👋</S.Hand><S.Dot>,</S.Dot><br />
                    My name is<br />
                    <GradientWord>Pavan MG</GradientWord>
                    <Typewriter
                        options={{
                            strings: ['I build things for web', 'I build designe'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </S.Title>



                <Tilt scale={1.1} transitionSpeed={2500}>

                    <S.Image>


                        <div>
                            <img src={man} alt={'Pavan MG'} />

                        </div>

                    </S.Image>
                </Tilt>
            </FlexWrapper>

        </Container>
    </S.Main>

}







