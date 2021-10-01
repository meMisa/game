// node_modules
import React, { lazy, Suspense, memo } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// components
const RockPaperScissorsPage = lazy(
  () => import("pages/rockPaperScissors/RockPaperScissorsPage")
);

const App = () => (
  <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/rock-paper-scissors"
            component={RockPaperScissorsPage}
          />

          <Redirect to="/rock-paper-scissors" />
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default memo(App);
