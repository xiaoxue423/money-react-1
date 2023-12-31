import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Tags from "views/Tags";
import Money from "views/Money";
import Statistics from "views/Statistics";
import styled from "styled-components";
import {Tag} from "views/Tag";

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:id" element={<Tag />} />
          <Route path="/money" element={<Money />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* <Route path="/" render={() => <Navigate to="about-us" />} /> */}
          {/* <Redirect exact from="/" to="/money" /> */}
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

const NoMatch = () => {
  return (
    <div>
      <h2>404页面</h2>
    </div>
  );
};

export default App;
