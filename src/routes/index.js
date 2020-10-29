import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QuoteDetailFirst from "../pages/quotedetailfirst/quotedetailfirst";
import QuoteDetailSecond from "../pages/quotedetailsecond/quotedetailsecond";
import ProcessBar from "../pages/processbar/processbar";
import HomePage from "../pages/homepage.js";
import Login from "../pages/login";
function Routes() {
  return (
      <Switch>
        <Route
          exact
          path={`/quotedetailfirst`}
          component={QuoteDetailFirst}
          />
        <Route
          exact
          path={`/quotedetailsecond`}
          component={QuoteDetailSecond}
        />
        <Route
          exact
          path={`/processbar`}
          component={ProcessBar}
        />
        <Route
          exact
          path={`/homepage`}
          component={HomePage}
        />
        <Route
          exact
          path={`/login`}
          component={Login}
        />
        <Redirect from="/" to='quotedetailfirst' />
      </Switch>
  );
}

export default Routes;