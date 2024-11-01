




import React, { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Experience } from './experience/Experience';
import { experienceType } from '../AboutMe';
import { Bounce, Fade, Hinge, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';




type propsType = {
    title:string,
    experiences:Array<experienceType>,
};

export const AboutMeSubSection:FC<propsType> = ({title,experiences}) => {
    return (
        <AboutMeSubSectionStyled>
            <SectionTitle mBottom={'38px'} >{title}</SectionTitle>

            <FlexWrapper gap={35} flexDirection={'column'}>
                <Slide cascade={true} damping={0.3} triggerOnce={true}>
                {experiences.map(({buttonBody,date,location,title},index)=> <Experience key={index} buttonBody={buttonBody} date={date} location={location} title={title} /> )}

                </Slide>
                
                
            </FlexWrapper>
            
        </AboutMeSubSectionStyled>
    )
}

const AboutMeSubSectionStyled = styled.div`

overflow:hidden;

`;


