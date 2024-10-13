




import React, { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Experience } from './experience/Experience';
import { experienceType } from '../AboutMe';

type propsType = {
    title:string,
    experiences:Array<experienceType>,
};

export const AboutMeSection:FC<propsType> = ({title,experiences}) => {
    return (
        <AboutMeSectionStyled>
            <SectionTitle mBottom={'38px'} textAlign={'left'} fSize={'42px'}>{title}</SectionTitle>

            <FlexWrapper gap={33} flexDirection={'column'}>
                {experiences.map(({buttonBody,date,location,title})=> <Experience buttonBody={buttonBody} date={date} location={location} title={title} /> )}
                
                
            </FlexWrapper>
        </AboutMeSectionStyled>
    )
}

const AboutMeSectionStyled = styled.div`
`;