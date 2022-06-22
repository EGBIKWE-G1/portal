import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkLogin } from "../utils/ApiUtils";

const PrivateRoute = ({ path, children }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     checkLogin() ? <Component {...props} /> : <Redirect to="/" />
    //   }
    // />

    <>
      {checkLogin() ? (
        <Route path={path}>{children}</Route>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PrivateRoute;
