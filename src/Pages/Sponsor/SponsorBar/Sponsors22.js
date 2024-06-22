import React from "react";
import nelnet from "../../../Images/nelnet.png"
import dpl from "../../../Images/DPL_logo_2018_rgb.png"
import buildertrend from "../../../Images/buildertrend.png"
import speedway from "../../../Images/speedway.png"
import nrc from "../../../Images/nrchealth.png"

import "../Styles/SponsorsBar.css";
import { Link } from "react-router-dom";

function Sponsor22() {
  return (
    <div className="sponsor-container">
      <div className="color-box gold">
        <h2>2022 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://nelnetinc.com/businesses/'}>
          <img src={nelnet} className="imageGold" alt="Nelnet" />
        </Link>
      </div>
      <div className="color-box silver">
        <h4>2022 Silver Sponsors</h4>
      </div>
      <div className="SilverSponsor">
        <Link to={'https://nrchealth.com/?https%3A%2F%2Fnrchealth_com%2F&gad_source=1'}>
          <img src={nrc} className="imageSilver" alt="NRC Health" />
        </Link>
        <Link to={'https://buildertrend.com/'}>
          <img src={buildertrend} className="imageSilver" alt="Buildertrend" />
        </Link>
        <Link to={'https://dontpaniclabs.com/'}>
          <img src={dpl} className="imageSilver" alt="Don't Panic Labs" />
        </Link>
      </div>
      <div className="color-box bronze">
        <h4>2022 Bronze Sponsors</h4>
      </div>
      <div className="BronzeSponsor">
        <Link to={'https://www.speedwaymotors.com/'}>
          <img src={speedway} className="imageBronze" alt="Speedway Motors" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor22
