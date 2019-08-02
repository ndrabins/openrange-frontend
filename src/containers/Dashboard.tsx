import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DesignSystem } from "../utils/DesignSystem";
import { NavBar } from "../commonComponents/Navbar";

const Container = styled.div`
  background-color: ${DesignSystem.colors.gray[900]};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <div> blah</div>
    </Container>
  );
};

export { Dashboard };
