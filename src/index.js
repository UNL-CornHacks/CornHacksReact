import React from "react";
import ReactDOM from "react-dom";

import UnderConstructionPage from "Pages/UnderConstruction/UnderConstructionPage";
import HomePage from "Pages/Home/HomePage";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import SponsorPage from "Pages/Sponsor/SponsorPage";
import RegisterPage from "Pages/Register/RegisterPage";
import OrganizerPage from "Pages/Organizer/OrganizerPage";
import KiewitPage from "Pages/Kiewit/KiewitPage";
import SchedulePage from "Pages/Schedule/SchedulePage";

const RouteHandler = () => (
  <Router>
    <Routes>
      <Route path="/under-construction" element={<UnderConstructionPage />} />
      <Route path="/home/" element={<HomePage />} />
      {/* <Route path="/sponsor/">
        <SponsorPage />
      </Route> */}
      {/* <Route path="/register/">
                <RegisterPage />
            </Route> */}
      <Route path="/organize/" element={<OrganizerPage />} />
      <Route path="/kiewit/" element={<KiewitPage />} />
      <Route path="/schedule/" element={<SchedulePage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
