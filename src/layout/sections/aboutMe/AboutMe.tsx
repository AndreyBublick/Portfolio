
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
import { font } from '../../../styles/Common';

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
        <SectionTitle>About Me</SectionTitle>
        <AboutMeDescriptionStyled>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</AboutMeDescriptionStyled>

        <AboutMeSection title={'Work Experience'} experiences={workExperiences} />
        <AboutMeSection title={'Education'} experiences={educations} />


      </FlexWrapper>

    </Container>
  </AboutMeStyled>

}



const AboutMeStyled = styled.section`


position:relative;
z-index:0;
${FlexWrapper} > div{
  
}
${FlexWrapper}{
  max-width:695px;
}

${FlexWrapper} > ${SectionTitle}{
  margin-bottom:0px;

}

h2{
    margin-bottom:38px;
    text-align:left;
    font-size:42px;
}

&::before{
  content:'';
  position:absolute;
  background:  url(${wall}) right center/auto no-repeat;
  width:100%;
  height: 100%;
  top: -40px;
  left:30px;
  z-index: -1;

 

}
`;

const AboutMeDescriptionStyled = styled.p`


${font({fMax:18,fMin:16,lineHeight:26/18})}

`;




