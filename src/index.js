import React from "react";
import ReactDOM from "react-dom";

import UnderConstructionPage from "Pages/UnderConstructionPage";
import SandboxPage from "Pages/SandboxPage";
import HomePage from "Pages/HomePage";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import "./index.css";
import SponsorPage from "Pages/SponsorPage";

const RouteHandler = () => (
    <Router>
        <Switch>
            <Route path="/under-construction">
                <UnderConstructionPage />
            </Route>
            <Route path="/sandbox/">
                <SandboxPage />
            </Route>
            <Route path="/home/">
                <HomePage />
            </Route>
            <Route path="/sponsor/">
                <SponsorPage />
            </Route>
            <Redirect to="/under-construction" />
        </Switch>
    </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
