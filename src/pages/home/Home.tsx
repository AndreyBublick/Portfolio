


import React from 'react'
import { Main } from '../../layout/sections/main/Main'
import { AboutMe } from '../../layout/sections/aboutMe/AboutMe'
import { Skills } from '../../layout/sections/skills/Skills'
import { Projects } from '../../layout/sections/projects/Projects'
import { MailMe } from '../../layout/sections/mailMe/MailMe'
import { ContactForm } from '../../layout/sections/сontactForm/ContactForm'
import { Map } from '../../layout/sections/map/Map'
import { MyWorks } from '../../layout/sections/myWorks/MyWorks'

export const Home = () => {
    return <>
        <Main />
        <AboutMe />
        <MyWorks /> 
        <Skills />
        <Projects />
        <MailMe />
        <ContactForm />
        <Map />
      
    </>

}

