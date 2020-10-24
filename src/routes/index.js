import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import QuoteDetailFirst from "../pages/quotedetailfirst/quotedetailfirst";
import QuoteDetailSecond from "../pages/quotedetailsecond/quotedetailsecond";
import ProcessBar from "../pages/processbar/processbar";
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
        <Redirect from="/" to='quotedetailfirst' />
      </Switch>
  );
}

export default Routes;