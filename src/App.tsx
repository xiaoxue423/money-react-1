import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Tag from "views/Tag";
import Money from "views/Money";
import Statistics from "views/Statistics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tag />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        {/* <Route path="/" render={() => <Navigate to="about-us" />} /> */}
        {/* <Redirect exact from="/" to="/money" /> */}
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </Router>
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
