import React from "react";
import ReactDOM from "react-dom";

import UnderConstructionPage from "Pages/UnderConstruction/UnderConstructionPage";
import HomePage from "Pages/Home/HomePage";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import "./index.css";
import SponsorPage from "Pages/Sponsor/SponsorPage";
import RegisterPage from "Pages/Register/RegisterPage";

const RouteHandler = () => (
    <Router>
        <Switch>
            <Route path="/under-construction">
                <UnderConstructionPage />
            </Route>
            <Route path="/home/">
                <HomePage />
            </Route>
            <Route path="/sponsor/">
                <SponsorPage />
            </Route>
            <Route path="/register/">
                <RegisterPage />
            </Route>
            <Redirect to="/home" />
        </Switch>
    </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
