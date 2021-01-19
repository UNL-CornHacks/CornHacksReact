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
import OrganizerPage from "Pages/Organizer/OrganizerPage";
import KiewitPage from "Pages/Kiewit/KiewitPage";
import SchedulePage from "Pages/Schedule/SchedulePage";

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
            <Route path="/organize/">
                <OrganizerPage />
            </Route>
            <Route path="/kiewit/">
                <KiewitPage />
            </Route>
            <Route path="/schedule/">
                <SchedulePage />
            </Route>
            <Redirect to="/home" />
        </Switch>
    </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
