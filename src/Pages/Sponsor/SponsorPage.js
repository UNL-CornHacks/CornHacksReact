import React, { useState } from "react";
import Colors from "Constants/Colors";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Components/SponsorSection";
import GradientHero from "GlobalComponents/GradientHero";
import SponsorTable from "Pages/Sponsor/Components/SponsorTable";
import ContinueArrow from "GlobalComponents/ContinueArrow";
import Button from "GlobalComponents/Button";
import HomeHero from "Pages/Home/Components/HomeHero";
import Sponsor24 from "./Sponsors24";
import SponsorCarousel from "./SponsorCarousel";

import "./Styles/SponsorPage.css";
import SponsorFAQ from "Pages/Sponsor/Components/SponsorFAQ";

const SponsorPage = () => {
  const [sponsors, getSponsors] = useState({});
  const [overlayState, setOverlayState] = useState(false);

  return (
      <div>
          <HomeHero showOverlay={() => setOverlayState(true)} />
          {/* <AirtableCompanies setSponsorData={getSponsors} /> */}
          <div className="SponsorCarousel">
            <SponsorCarousel />
          </div>
          <Sponsor24 />
          <SponsorTable />
          {/* <TextSection backgroundColor={Colors.WHITE}>
              <SponsorSection
                  title="Platinum Sponsors"
                  titleColor={Colors.DARK_BLUE}
                  sponsorData={sponsors.platinum ? sponsors.platinum : []}
                  color="blue"
                  sectionHeight="250px"
                  grid={3}
              />
              <SponsorSection
                  title="Gold Sponsors"
                  titleColor={Colors.DARK_BLUE}
                  sponsorData={sponsors.gold ? sponsors.gold : []}
                  color="yellow"
                  sectionHeight="200px"
                  grid={4}
              />
              <SponsorSection
                  title="Silver Sponsors"
                  titleColor={Colors.DARK_BLUE}
                  sponsorData={sponsors.silver ? sponsors.silver : []}
                  color="grey"
                  sectionHeight="100px"
                  grid={5}
              />
              <p>this section</p>
              <SponsorSection
                  title="Bronze Sponsors"
                  titleColor={Colors.DARK_BLUE}
                  sponsorData={sponsors.bronze ? sponsors.bronze : []}
                  color="brown"
                  sectionHeight="100px"
                  grid={6}
              />
          </TextSection> */}
         
      </div>
  );
};

export default SponsorPage;
