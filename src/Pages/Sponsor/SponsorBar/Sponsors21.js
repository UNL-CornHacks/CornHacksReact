import React from "react";
import kiewit from "../../../Images/kiewit.png"
import nelnet from "../../../Images/nelnet.png"
import turner from "../../../Images/turner.png"

import "../Styles/SponsorsBar.css";
import { Link } from "react-router-dom";

function Sponsor21() {
  return (
    <div className="sponsor-container">
      <div className="color-box gold">
        <h2>2021 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://kiewitcareers.kiewit.com/'}>
          <img src={kiewit} className="imageGold" alt="Kiewit" />
        </Link>
      </div>
      <div className="color-box silver">
        <h4>2021 Silver Sponsors</h4>
      </div>
      <div className="SilverSponsor">
        <Link to={'https://nelnetinc.com/businesses/'}>
          <img src={nelnet} className="imageSilver" alt="Nelnet" />
        </Link>
        <Link to={'http://theturnerway.com/'}>
          <img src={turner} className="imageSilver" alt="Turner Technology" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor21
