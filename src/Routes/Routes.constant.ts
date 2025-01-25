// React
import React from "react";
// React

// Pages
import Home from "../Pages/Home/Home";
// Pages

export type T_Route = {
  path: string;
  title: string;
  Element: React.FunctionComponent;
};

export const Routes: T_Route[] = [
  {
    path: "/",
    Element: Home,
    title: "خانه",
  },
];
