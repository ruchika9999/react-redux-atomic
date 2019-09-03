import React from "react";
import { Route, Switch } from "react-router-dom";

// routs
import AsyncComponent from "./component/routes/async_component";
import UnauthenticatedRoute from "./component/routes/unauthenticated_route";
// pages
const Landing = AsyncComponent(() => import("./component/pages/landing"));

export default ({ childProps }) => (
  <Switch>
    <UnauthenticatedRoute
      path="/"
      exact
      component={Landing}
      props={childProps}
    />

    <Route component={() => <div> page no found</div>} />
  </Switch>
);
