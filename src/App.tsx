import Nav from "components/Nav";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags" component={Tag} />
            <Route path="/money" component={Money} />
            <Route path="/statistics" component={Statistics} />
            <Redirect exact from="/" to="/money" />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

const NoMatch = () => (
  <div>
    <h2>404页面</h2>
  </div>
);

const Tag = () => (
  <div>
    <h2>标签页面</h2>
  </div>
);

const Money = () => (
  <div>
    <h2>记账页面1111</h2>
  </div>
);
const Statistics = () => (
  <div>
    <h2>statistics</h2>
  </div>
);

export default App;
