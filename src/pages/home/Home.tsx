



import { Main } from '../../layout/sections/main/Main'
import { AboutMe } from '../../layout/sections/aboutMe/AboutMe'
import { Skills } from '../../layout/sections/skills/Skills'
import { MailMe } from '../../layout/sections/mailMe/MailMe'
import { ContactForm } from '../../layout/sections/сontactForm/ContactForm'
import { Map } from '../../layout/sections/map/Map'
import { MyWorks } from '../../layout/sections/myWorks/MyWorks'
import { Testimony } from '../../layout/sections/testimony/Testimony'
import { Particle } from '../../components/particle/Particle'
export const Home = () => {
    return <>
    <Particle  />
        <Main />
        <MyWorks /> 
        <AboutMe />
        <Skills />
        <Testimony />
       {/*  <Projects /> */}
        <MailMe />
        <ContactForm />
        <Map />
      
    </>

}

