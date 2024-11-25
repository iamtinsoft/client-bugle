import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router-type";
import PagesData from "./PagesData";

const Router = () => {
  const pageRoutes = PagesData.map(
    ({ path, element }: routerType, i: number) => {
      return <Route key={i} path={`/${path}`} element={element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
