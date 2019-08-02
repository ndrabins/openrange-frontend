import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DesignSystem } from "../utils/DesignSystem";
import { MenuRounded } from "@material-ui/icons/";

const NavContainer = styled.div`
  background-color: ${DesignSystem.colors.gray[800]};
  height: 42px;
  display: flex;
  flex-direction: row;
  padding: ${DesignSystem.spacing[2]};
  padding-left: ${DesignSystem.spacing[4]};
  padding-right: ${DesignSystem.spacing[4]};
  align-items: center;
  justify-content: space-between;
  box-shadow: ${DesignSystem.shadow[2]};
`;

const StyledIcon = styled(MenuRounded)`
  font-size: 50px;
  color: ${DesignSystem.colors.cyan[500]};
  width: 34px;
  height: 34px;
`;

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <StyledIcon />
      <div> profile</div>
    </NavContainer>
  );
};

export { NavBar };
