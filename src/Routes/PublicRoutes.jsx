import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { checkLogin } from "../../utils/ApiUtils";

import { checkLogin } from "../utils/ApiUtils";
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkLogin() ? <Redirect to="/homepage" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
