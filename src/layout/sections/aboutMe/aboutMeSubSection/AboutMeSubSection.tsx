import React, {FC} from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../../components/SectionTitle';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Experience} from './experience/Experience';
import {experienceType} from '../AboutMe';
import {Slide} from 'react-awesome-reveal';
import {theme} from '../../../../styles/theme';


type propsType = {
    title:string,
    experiences:Array<experienceType>,
};

export const AboutMeSubSection:FC<propsType> = ({title,experiences}) => {
    return (
        <AboutMeSubSectionStyled>
            <SectionTitle mBottom={`${theme.margins.subSection}px`} >{title}</SectionTitle>

            <FlexWrapper gap={35} flexDirection={'column'}>
                <Slide cascade={true} damping={0.3} triggerOnce={true}>
                {experiences.map(({linkBody,date,location,title},index)=> <Experience key={index} linkBody={linkBody} date={date} location={location} title={title} /> )}

                </Slide>
                
                
            </FlexWrapper>
            
        </AboutMeSubSectionStyled>
    )
}

const AboutMeSubSectionStyled = styled.div`

overflow:hidden;

`;


