import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ component: RouteComponent }: any) => {
  return <RouteComponent />;
};
