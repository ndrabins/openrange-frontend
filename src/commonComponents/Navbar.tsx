import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DesignSystem } from "../utils/DesignSystem";

const NavContainer = styled.div`
  background-color: ${DesignSystem.colors.gray[800]};
  height: 42px;
  display: flex;
  flex-direction: row;
  padding: ${DesignSystem.spacing[2]};
  align-items: center;
  justify-content: space-between;
  box-shadow: ${DesignSystem.shadow[2]};
`;

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <div> something</div>
      <div> blah</div>
    </NavContainer>
  );
};

export { NavBar };
