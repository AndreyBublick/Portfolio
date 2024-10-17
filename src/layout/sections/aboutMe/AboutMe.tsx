
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle';
import { WorkExperience } from './workExperience/WorkExperience';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/theme';
import { Experience } from './aboutMeSection/experience/Experience';
import { AboutMeSection } from './aboutMeSection/AboutMeSection';
import wall from '../../../assets/images/wall.webp';
import svgs from '../../../assets/images/code-svg.svg';
import { Container } from '../../../components/Container';

export type experienceType = {

  title: string,
  buttonBody: 'Full Time' | 'Internship',
  date: string,
  location: {
    building: string,
    country: string,
  },

};

export const AboutMe: FC = () => {

  const [workExperiences, setWorkExperiences] = useState<Array<experienceType>>([
    {
      title: 'Junior Web Developer',
      buttonBody: 'Full Time',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'Dr. Rajkumar’s Learning App',
        country: 'Bengaluru',
      },
    },
    {
      title: 'Web Development Intern',
      buttonBody: 'Internship',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'IonPixelz Web Solutions',
        country: 'Bengaluru',
      },
    },
    {
      title: 'SEO / SEM Specialist',
      buttonBody: 'Internship',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'HAAPS',
        country: 'Bengaluru',
      },
    },]);
  const [educations, setEducations] = useState<Array<experienceType>>([
    {
      title: 'Bachelor in Electronics & Communication',
      buttonBody: 'Full Time',
      date: 'Aug 2015 - Dec 2020',
      location: {
        building: 'Bangalore Instutute of Technology',
        country: '',
      },
    }
  ]);


  return <AboutMeStyled>
    <Container>
      <FlexWrapper gap={38} flexDirection={'column'}>
        <SectionTitle mBottom={'0px'} textAlign={'left'} fSize={'42px'}>About Me</SectionTitle>
        <AboutMeDescriptionStyled>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutMeDescriptionStyled>

        <AboutMeSection title={'Work Experience'} experiences={workExperiences} />
        <AboutMeSection title={'Education'} experiences={educations} />


      </FlexWrapper>

    </Container>
  </AboutMeStyled>

}



const AboutMeStyled = styled.section`

position:relative;
${FlexWrapper} > div{
   width:100%; 
}
${FlexWrapper}{
  max-width:710px;
}

z-index:0;


&::before{
  content:'';
  position:absolute;
  background:  url(${wall}) right center/auto no-repeat fixed;
  width:100%;
  height: 100%;
  top: -50px;
  left:350px;
  z-index: -1;

 

}
`;

const AboutMeDescriptionStyled = styled.p`
font-size: 18px;


`;




