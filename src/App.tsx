import "./App.css";
import styled from "styled-components";

import { Wrapper } from "./components/wrapper/Wrapper.styled";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/selectors/main/Main";

export const App = () => {
  return (
    <Wrapper>

      <Header />
<Main />
      


    </Wrapper>
  );
};



