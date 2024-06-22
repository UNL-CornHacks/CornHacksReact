
import React from "react";
import talent from "../../../Images/talent.jpg"
import spreetail from "../../../Images/spreetail.png"
import teamSoftware from "../../../Images/teamsoftware.png"
import buildertrend from "../../../Images/buildertrend.png"
import ameritrade from "../../../Images/ameritrade.png"

import "../Styles/SponsorsBar.css";
import { Link } from "react-router-dom";

function Sponsor19() {
  return (
    <div className="sponsor-container">
      <div className="color-box gold">
        <h2>2019 Gold Sponsors</h2>
      </div>
      <div className="GoldSponsor">
        <Link to={'https://buildertrend.com/careers/'}>
          <img src={buildertrend} className="imageGold" alt="Buildertrend" />
        </Link>
        <Link to={'https://www.tdainstitutional.com/'}>
        <img src={ameritrade} className="imageGold" alt="Ameritrade" />
        </Link>
      </div>
      <div className="color-box silver">
        <h3>2019 Silver Sponsors</h3>
      </div>
      <div className="BronzeSponsor">
        <Link to={'https://teamsoftware.com/?utm_source=google_ads&utm_medium=cpc&utm_term=team%20software&utm_matchtype=p&utm_campaign=team_NORAM_brand&utm_device=c&utm_network=g&utm_content=TEAM_site&gad_source=1&gclid=CjwKCAjw7NmzBhBLEiwAxrHQ-e3-R5ctsCGA5k0hZFaJe66Y5PICn2ZfYSkimugUn2ExYPmu46vBwBoCkZ0QAvD_BwE'}>
          <img src={teamSoftware} className="imageSilver" alt="Team Software" />
        </Link>
        <Link to={'https://www.spreetail.com/'}>
          <img src={spreetail} className="imageSilver" alt="Spreetail" />
        </Link>
        <Link to={'https://talentplus.com/'}>
          <img src={talent} className="imageSilver" alt="Talent+" />
        </Link>
      </div>
    </div>
  );
}

export default Sponsor19
