import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import classes from "./styles.module.css";
export const Dashboard = () => {
  return (
    <div className={classes.main_container}>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
