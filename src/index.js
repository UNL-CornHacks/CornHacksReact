import React from "react";
import ReactDOM from "react-dom";

import UnderConstructionPage from "Pages/UnderConstructionPage";
import SandboxPage from "Pages/SandboxPage";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./index.css";

const RouteHandler = () => (
  <Router>
    <Switch>
      <Route path="/under-construction">
        <UnderConstructionPage />
      </Route>
      <Route path="/sandbox/">
        <SandboxPage />
      </Route>
      <Redirect to="/under-construction" />
    </Switch>
  </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
