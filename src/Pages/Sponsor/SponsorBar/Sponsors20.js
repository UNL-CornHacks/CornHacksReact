import React from "react";
import netnet from "../../../Images/nelnet.png"
import mutual from "../../../Images/mutualofomaha.png"
import kiewit from "../../../Images/kiewit.png"
import dmsi from "../../../Images/dmsi.png"
import sandhills from "../../../Images/sandhills.png"
import travefy from "../../../Images/travefy.png"

import "../Styles/SponsorsBar.css";
import { Link } from "react-router-dom";

function Sponsor20() {
  return (
    <div className="sponsor-container">
      <div className="color-box platinum">
        <h2>2020 Platinum Sponsors</h2>
      </div>
      <div className="PlatinumSponsor">
        <Link to={'https://kiewitcareers.kiewit.com/'}>
          <img src={kiewit} className="imagePlatinum" alt="Kiewit" />
        </Link>
      </div>
      <div className="color-box gold">
        <h2>2020 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://www.mutualofomaha.com/'}>
          <img src={mutual} className="imageGold" alt="Mutual of Omaha" />
        </Link>
        <Link to={'https://www.dmsi.com/'}>
        <img src={dmsi} className="imageGold" alt="DMSi" />
        </Link>
      </div>
      <div className="color-box silver">
        <h4>2020 Silver Sponsors</h4>
      </div>
      <div className="SilverSponsor">
        <Link to={'https://nelnetinc.com/businesses/'}>
          <img src={netnet} className="imageSilver" alt="Nelnet" />
        </Link>
        <Link to={'https://travefy.com/'}>
          <img src={travefy} className="imageSilver" alt="Travefy" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor20
