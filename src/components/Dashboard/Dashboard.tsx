import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { MainContainer, NavPosition } from "./styles";

export const Dashboard = () => {
  return (
    <MainContainer>
      <NavPosition>
        <Navbar />
      </NavPosition>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </MainContainer>
  );
};
