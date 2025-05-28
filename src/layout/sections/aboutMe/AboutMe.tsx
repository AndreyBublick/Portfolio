
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
  linkBody: string,
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
      linkBody: 'Full Time',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'Dr. Rajkumar’s Learning App',
        country: 'Bengaluru',
      },
    },
    {
      title: 'Web Development Intern',
      linkBody: 'Internship',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'IonPixelz Web Solutions',
        country: 'Bengaluru',
      },
    },
    {
      title: 'SEO / SEM Specialist',
      linkBody: 'Internship',
      date: 'Sep 2021 - Dec 2021',
      location: {
        building: 'HAAPS',
        country: 'Bengaluru',
      },
    },]);
  const [educations] = useState<Array<experienceType>>([
    {
      title: 'Техник-Программист',
      linkBody: 'https://ktyis.ru/',
      date: 'Сентябрь 2018 - Июнь 2021',
      location: {
        building: 'Краснодарский техникум управления информатизации и сервиса',
        country: '',
      },

    },
    {
      title: 'Учебное заведение в Минске',
      linkBody: 'https://it-incubator.io/',
      date: 'Октябрь 2024 - Март 2025',
      location: {
        building: 'IT-INCUBATOR',
        country: '',
      }
    }
  ]);


  return <S.AboutMe ref={ref} isView={inView}>
   

    
    <Container>
      <FlexWrapper  gap={theme.margins.subSection} flexDirection={'column'}>
        <div>
        <SectionTitle mBottom = {`${theme.margins.subSection}px`}>Обо мне</SectionTitle>
        <S.AboutMeDescription>Frontend-разработчик с опытом создания адаптивных и производительных веб-приложений.
          Специализируюсь на <b>React</b>, <b>TypeScript</b> и современных инструментах  (<b>Next.js, RTK Query, Vite</b>).
          Умею превращать дизайн в чистый код, уделяя внимание <b>UX</b>, доступности и оптимизации.
          Люблю сложные задачи и изучать новые технологии</S.AboutMeDescription>

        </div>
        
        {/*<AboutMeSubSection title={'Work Experience'} experiences={workExperiences} />*/}
        <AboutMeSubSection title={'Образование'} experiences={educations} />


      </FlexWrapper>

    </Container>

  </S.AboutMe>

}


