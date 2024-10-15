


import React from 'react'
import { Main } from '../../layout/sections/main/Main'
import { AboutMe } from '../../layout/sections/aboutMe/AboutMe'
import { Skills } from '../../layout/sections/skills/Skills'
import { Projects } from '../../layout/sections/projects/Projects'
import { Contacts } from '../../layout/sections/contacts/Contacts'
import { ContactForm } from '../../layout/sections/ContactForm/ContactForm'

export const Home = () => {
    return <>
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
        <ContactForm />
    </>

}

