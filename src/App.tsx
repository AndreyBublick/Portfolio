import "./App.css";
import styled from "styled-components";

import { Wrapper } from "./components/Wrapper.styled";

export const App = () => {
  return (
    <Wrapper>
      <div className="App">
        <Title>Welcome to IT-INCUBATOR</Title>
       
        
      </div>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;


