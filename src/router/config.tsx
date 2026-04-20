import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
<<<<<<< HEAD
import MentionsLegales from "../pages/mentions-legales/page";
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
<<<<<<< HEAD
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
    path: "*",
    element: <NotFound />,
  },
];

<<<<<<< HEAD
export default routes;
=======
export default routes;
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
