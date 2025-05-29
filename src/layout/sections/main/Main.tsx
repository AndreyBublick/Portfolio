import React, {FC} from 'react';

import man from '../../../assets/images/man.webp';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {GradientWord} from '../../../components/GradientWord';
import {Container} from '../../../components/Container';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import {Bounce, JackInTheBox, Zoom} from "react-awesome-reveal";


import Tilt from 'react-parallax-tilt';


export const Main: FC = () => {
    return <S.Main>
        <Container>


            <FlexWrapper gap={15} alignItems={'center'} flexWrap={'wrap'}>
                <S.Title>

                    Привет <S.Hand><JackInTheBox triggerOnce>👋</JackInTheBox></S.Hand><S.Dot>,</S.Dot><br/>
                    <Bounce triggerOnce delay={200}> Меня зовут</Bounce>
                    <Bounce triggerOnce delay={400}><GradientWord>Шамара А.Р</GradientWord></Bounce>
                    <Typewriter
                        options={{
                            strings: ['Я делаю Веб-материю', 'Я воплощаю идеи'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </S.Title>


                <Zoom>
                    <Tilt scale={1.1} transitionSpeed={2500}>
                        <S.Image>
                            <div>
                                <img src={man} alt={'Pavan MG'}/>
                            </div>

                        </S.Image>
                    </Tilt>
                </Zoom>

            </FlexWrapper>

        </Container>
    </S.Main>

}







