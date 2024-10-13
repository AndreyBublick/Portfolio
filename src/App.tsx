import "./App.css";
import styled from "styled-components";

import { Wrapper } from "./components/wrapper/Wrapper.styled";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { FlexWrapper } from "./components/FlexWrapper";
import { Projects } from "./layout/sections/projects/Projects";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { AboutForm } from "./layout/sections/aboutForm/AboutForm";
import { AboutMe } from "./layout/sections/aboutMe/AboutMe";

export const App = () => {
  return (
    <FlexWrapper gap={200} flexDirection={"column"}>

      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      
      <AboutForm />


    </FlexWrapper>
  );
};



