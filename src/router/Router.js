// ** Router imports
import { useRoutes } from "react-router-dom";

// ** GetRoutes
import { getRoutes } from "./routes";

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";

const Router = () => {
  // ** Hooks
  const { layout } = useLayout();

  const allRoutes = getRoutes(layout);

  const routes = useRoutes([...allRoutes]);

  return routes;
};

export default Router;
