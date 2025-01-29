// React
import React, { useCallback } from "react";
// React

// Router
import {
  matchRoutes,
  useLocation,
  Routes as RouterMaster,
  Route,
} from "react-router-dom";
// Router

// Routes
import { Routes } from "./Routes.constant";
import { useDebounce } from "../Hooks/useDebounce";
// Routes

const Router = () => {
  const { pathname } = useLocation();

  const titleChanger = useCallback(() => {
    const currRoute = matchRoutes(
      Routes.map((route) => ({ path: route.path })),
      pathname
    );

    if (!currRoute) {
      document.title = "صفحه پیدا نشد";
      return;
    }

    const desiredRouteName = Routes.find(
      (item) => item.path === currRoute[0].route.path
    );

    if (!desiredRouteName) return;

    document.title = `صفحه فعلی  - ${desiredRouteName.title || "مسیر اشتباه"}`;
  }, [pathname]);

  useDebounce(1, titleChanger);

  return (
    <RouterMaster>
      {Routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.Element />} />
      ))}
    </RouterMaster>
  );
};

export default Router;
