import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "../container/mobileContainer/LoginPage";
import Home from "../pages/home/Home";
import HomePage from "../pages/homePage/HomePage";
import Care from "../pages/woozeeeCare/Care";
import PrivateRoute from "./PrivateRoutes";

const InnerRouteList = [
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/home/care",
    exact: true,
    component: Care,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/home">
          {InnerRouteList.map((r) => (
            <Route
              key={r.path}
              path={r.path}
              component={r.component}
              exact={r.exact}
            />
          ))}
        </PrivateRoute>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        {/*  {window.screen.width < 768 ? (
          <Route exact path='/login' component={LoginPage} />
        ) : (
          <Redirect to='/' />
        )} */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
