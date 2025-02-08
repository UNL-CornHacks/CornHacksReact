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

import "./Styles/SponsorPage.css";
import SponsorFAQ from "Pages/Sponsor/Components/SponsorFAQ";

const SponsorPage = () => {
  const [sponsors, getSponsors] = useState({});
  return (
      <div>
          <AirtableCompanies setSponsorData={getSponsors} />
          <GradientHero
              colors={[Colors.BLUE, Colors.GREEN, Colors.YELLOW]}
              header
          >
              <Type size="h1" bold>
                  Welcome to your future.
              </Type>
              <Type size="h4">
                  Establish connections with the best talent in Nebraska.
              </Type>
              <div className="ch-button-container-left">
                  <Button to="mailto:cornhacks@unl.edu">
                      Reach Out Now
                  </Button>
              </div>
              <ContinueArrow
                  className="right-arrow-positioning"
                  backgroundColor={Colors.CORN_GREEN}
                  scrollTo={window.innerHeight}
              />
          </GradientHero>
          <TextSection backgroundColor={Colors.CORN_GREEN}>
              <Type size="h3" align="center" bold>
                  March 1-2, 2025
              </Type>
              <a
                  style={{ color: Colors.WHITE }}
                  href="https://maps.app.goo.gl/wDnP2XBvL13VsuCU6"
              >
                  <Type size="h3" align="center" bold>
                      Kiewit Hall
                  </Type>
              </a>
          </TextSection>
          {/* <SponsorTable /> */}
          {/* <SponsorFAQ /> */}
 {/*
          <TextSection backgroundColor={Colors.WHITE}>
              <SponsorSection
                  title="Platinum Sponsors"
                  titleColor={Colors.CORN_GREEN}
                  sponsorData={sponsors.platinum ? sponsors.platinum : []}
                  color="blue"
                  sectionHeight="250px"
                  grid={3}
              />
              <SponsorSection
                  title="Gold Sponsors"
                  titleColor={Colors.CORN_GREEN}
                  sponsorData={sponsors.gold ? sponsors.gold : []}
                  color="yellow"
                  sectionHeight="200px"
                  grid={4}
              />
              <SponsorSection
                  title="Silver Sponsors"
                  titleColor={Colors.CORN_GREEN}
                  sponsorData={sponsors.silver ? sponsors.silver : []}
                  color="grey"
                  sectionHeight="100px"
                  grid={5}
              />
              <img id="nelnet" src={require("../../Images/sponsors/sponsor_logos/Nelnet/Nelnet_Logo_White_Web.PNG")} />
              <SponsorSection
                  title="Bronze Sponsors"
                  titleColor={Colors.CORN_GREEN}
                  sponsorData={sponsors.bronze ? sponsors.bronze : []}
                  color="brown"
                  sectionHeight="100px"
                  grid={6}
              />
          </TextSection>
          */}
      </div>
  );
};

export default SponsorPage;
