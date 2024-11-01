
import React, { FC, useState } from 'react'
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

import { Container } from '../../../components/Container';
import { S } from './AboutMe_Styles';
import { AboutMeSubSection } from './aboutMeSubSection/AboutMeSubSection';


import "intersection-observer";
import { useInView } from 'react-intersection-observer';
import { theme } from '../../../styles/theme';


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
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация срабатывает только один раз
    threshold: 0.5, // Срабатывает, когда 30% элемента видно на экране
  });


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


  return <S.AboutMe ref={ref} isView={inView}>
   

    
    <Container>
      <FlexWrapper  gap={theme.margins.subSection} flexDirection={'column'}>
        <div>
        <SectionTitle mBottom = {`${theme.margins.subSection}px`}>About Me</SectionTitle>
        <S.AboutMeDescription>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</S.AboutMeDescription>

        </div>
        
        <AboutMeSubSection title={'Work Experience'} experiences={workExperiences} />
        <AboutMeSubSection title={'Education'} experiences={educations} />


      </FlexWrapper>

    </Container>

  </S.AboutMe>

}


