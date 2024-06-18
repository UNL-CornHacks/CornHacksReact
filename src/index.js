import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UnderConstructionPage from "Pages/UnderConstruction/UnderConstructionPage";
import HomePage from "Pages/Home/HomePage";
import App from "App"

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";
import SponsorPage from "Pages/Sponsor/SponsorPage";
import OrganizerPage from "Pages/Organizer/OrganizerPage";
import SchedulePage from "Pages/Schedule/SchedulePage";

const RouteHandler = () => (
  <Router>
    <Routes>
      <Route path="/under-construction" element={<UnderConstructionPage/>} />
      <Route path="/home/" element={<HomePage/>} />
      <Route path="/sponsor/" element={<SponsorPage/>} />
      <Route path="/organize/" element={<OrganizerPage />} />
      <Route path="/schedule/" element={<SchedulePage />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

ReactDOM.render(<RouteHandler />, document.getElementById("root"));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'index.css';
// import App from 'App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
