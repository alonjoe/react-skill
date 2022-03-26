import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Edit from "./Edit";

function App() {
  return (
    <Wrap>
      <Header/>
      <Container>
        <Route path={"/"} exact>
          <Main/>
        </Route>

        <Route path={"/edit"}>
          <Edit/>
        </Route>
      </Container>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  /* height: 100vh; */
  width: 100vw;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
`;