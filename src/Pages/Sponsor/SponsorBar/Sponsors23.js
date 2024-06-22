import React from "react";
import olsson from "../../../Graphics/olsson.svg"

import "../Styles/SponsorsBar.css";
import { Link } from "react-router-dom";

function Sponsor23() {
  return (
    <div className="sponsor-container">
      <div className="color-box gold">
        <h2>2023 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://www.olsson.com/'}>
          <img src={olsson} className="imageGold" alt="Olsson" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor23
