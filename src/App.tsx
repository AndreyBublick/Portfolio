import "./App.css";
import styled from "styled-components";

import { Wrapper } from "./components/wrapper/Wrapper.styled";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { FlexWrapper } from "./components/FlexWrapper";
import { Projects } from "./layout/sections/projects/Projects";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { ContactForm } from "./layout/sections/ContactForm/ContactForm";
import { AboutMe } from "./layout/sections/aboutMe/AboutMe";
import { Footer } from "./layout/footer/Footer";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <FlexWrapper gap={200} flexDirection={"column"}>

      <Header />
      <Routes>
        {routes.map(({path,element}) =><Route key={path} path={path} element={element} />  )}
      </Routes>
    
      <Footer />


    </FlexWrapper>
  );
};



