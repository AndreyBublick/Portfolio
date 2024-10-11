import "./App.css";
import styled from "styled-components";

import { Wrapper } from "./components/wrapper/Wrapper.styled";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { FlexWrapper } from "./components/FlexWrapper";

export const App = () => {
  return (
    <FlexWrapper gap={200} flexDirection={"column"}>

      <Header />
      <Main />
      <Skills />



    </FlexWrapper>
  );
};



