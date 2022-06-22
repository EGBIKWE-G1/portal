import React from "react";
import { Redirect, Switch } from "react-router";
// import PublicRoute from "./PublicRoute";
// import Login from "../../pages/auth/Login";
// import { checkLogin } from "../../utils/ApiUtils";
import Home from "../pages/home/Home";
import PublicRoute from "./PublicRoutes";
import { checkLogin } from "../utils/ApiUtils";
export const AuthRoutesList = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "",
    exact: true,
    component: ({ location }) => {
      // const location = useLocation()

      return checkLogin() ? (
        <Redirect to="/home" />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      );
    },
  },
];

const AuthRoutes = () => {
  return (
    <Switch>
      {AuthRoutesList.map((r) => (
        <PublicRoute
          component={r.component}
          path={r.path}
          exact={r.exact}
          key={r.path}
          // render
        />
      ))}
    </Switch>
  );
};

export default AuthRoutes;
