import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { Dashboard } from "./containers/Dashboard";

const Container = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Route path="/" exact component={Dashboard} />
      </Router>
    </Container>
  );
};

export default App;
