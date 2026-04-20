import { useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";
<<<<<<< HEAD
import { useGA4PageView } from "@/hooks/useGA4PageView";
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
<<<<<<< HEAD

  useGA4PageView();

=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  });
<<<<<<< HEAD

  return element;
}
=======
  return element;
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
