import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import MentionsLegales from "../pages/mentions-legales/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
