import React, { useState } from "react";
import HomeHero from "Pages/Home/Components/HomeHero";
import HomeCarousel from "./HomeCarousel";
import Colors from "Constants/Colors";
import ImportantDates from "Constants/ImportantDates";
import Type from "GlobalComponents/Type";
import TextSection from "GlobalComponents/TextSection";
import ImageSection from "GlobalComponents/ImageSection";
import AirtableCompanies from "Calls/AirtableCompanies";
import SponsorSection from "Pages/Sponsor/Components/SponsorSection";
import Countdown from "GlobalComponents/Countdown";
import Question from "GlobalComponents/Question";
import Button from "GlobalComponents/Button";
import VideoPlayer from "VideoPlayer";
import App from "PastProjects"
import logo19 from "../../Images/cropped_raw.png"
import logo20 from "../../Graphics/cornhacks.svg"
import logo21 from "../../Graphics/logo21.svg"
import logo22 from "../../Images/logo22.png"
import logo23 from "../../Images/2023_final_logo_only.png"
import logo24 from "../../Graphics/corn3d.svg"
import Sponsors24 from "../Sponsor/Sponsors24"
import Numbers from "./Numbers"

import "./Styles/HomePage.css"

const HomePage = () => {
  const [sponsors, getSponsors] = useState({});
  const [overlayState, setOverlayState] = useState(false);
  return (
    <div>
       <AirtableCompanies setSponsorData={getSponsors} />
      <HomeHero showOverlay={() => setOverlayState(true)} />
      <section className="AboutUsPage">
        <div className="AboutUsTitle">
          <div className="Title" style={{ display: 'flex'}}>
            <img src={logo19} alt="CornHacks 2019 Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
            <img src={logo20} alt="CornHacks 2020 Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
            <img src={logo21} alt="CornHacks 2021 Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
            <h1>About Us</h1>
            <img src={logo22} alt="CornHacks 2022 Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
            <img src={logo23} alt="CornHacks 2023 Logo" style={{ marginRight: '10px', width: '40px', height: '50px' }} />
            <img src={logo24} alt="CornHacks 2024 Logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
          </div>
          <h3>So, what is a <span style={{ color: '#f4d816', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>Corn</span>
            <span style={{ color: '#4bb965', fontWeight: 'bold', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Hacks
            </span>
            ?
          </h3>
        </div>
        <div className='informationBox'>
          <div className='information'>
            <p>
            <span style={{ color: '#f4d816', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Corn
            </span>
            <span style={{ color: '#4bb965', fontWeight: 'bold', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Hacks
            </span> is a coding/design competition where individuals or teams of up to four people compete over a <span style={{ color: '#a216b6'}}>
              24-Hour
            </span> period to see who can create the best project. Like most hackathons, <span style={{ color: '#f4d816', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Corn
            </span>
            <span style={{ color: '#4bb965', fontWeight: 'bold', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Hacks
            </span> is focused on giving
              participants a chance to show off their skills while meeting people with similar interests and networking
              with local businesses. The best part? <span style={{ color: '#f4d816', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Corn
            </span>
            <span style={{ color: '#4bb965', fontWeight: 'bold', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Hacks
            </span>  is completely <span style={{ color: 'red', fontWeight: 'bold' }}>
              FREE
            </span> and meals are provided. <span style={{ color: '#f4d816', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Corn
            </span>
            <span style={{ color: '#4bb965', fontWeight: 'bold', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.75)'}}>
              Hacks
            </span> is funded
              by the University of Nebraska-Lincoln and industry sponsors. <span style={{ fontWeight: 'bold' }}>Check out our 2024 sponsors <span style={{ color: 'blue' }}>here</span></span>
            </p>
          </div>
        </div>
        <HomeCarousel></HomeCarousel>
        <p className="labels">CornHacks 2024 by the Numbers:</p>
        <section className="numbers-container">
      <div className="bigbox participants">
        <p>Participants:</p>
        <Numbers end={106} duration={5} />
      </div>
      <div className="bigbox LOC">
        <p>Lines of Code Written:</p>
        <Numbers end={100000} duration={5} specialEnd="a lot" />
      </div>
      <div className="bigbox money">
        <p>Total Prizes:</p>
        <Numbers end={3500} duration={6} prefix="$" />
      </div>
    </section>
    <p className="labels">Participants by Major (Includes Double-Majors):</p>
    <section className="numbers-container">
      <div className="littlebox CompSci">
        <h4 className="labelText">Computer</h4>
        <Numbers end={67} duration={8} />
        <h4 className="labelText">Science</h4>
      </div>
      <div className="littlebox SoftwareEng">
        <h4 className="labelText">Software</h4>
        <Numbers end={17} duration={8} />
        <h4 className="labelText">Engineering</h4>
      </div>
      <div className="littlebox Math">
        <h4 className="labelText">Math</h4>
        <Numbers end={10} duration={8} />
        <h4 style={{ color: "#f23b3d"}}> Eng</h4>
      </div>
      <div className="littlebox CompEng">
        <h4 className="labelText">Computer</h4>
        <Numbers end={6} duration={8} />
        <h4 className="labelText">Engineering</h4>
      </div>
      <div className="littlebox ElectricalEng">
        <h4 className="labelText">Electrical</h4>
        <Numbers end={5} duration={8} />
        <h4 className="labelText">Engineering</h4>
      </div>
      <div className="littlebox DataSci">
        <h4 className="labelText">Data</h4>
        <Numbers end={3} duration={8} />
        <h4 className="labelText">Science</h4>
      </div>
      <div className="littlebox IT">
        <h4 className="labelText">Information</h4>
        <Numbers end={3} duration={8} />
        <h4 className="labelText">Technology</h4>
      </div>
    </section>
    <section className="numbers-container">
      <div className="littlebox MechEng">
        <h4 className="labelText">Mechanical</h4>
        <Numbers end={3} duration={8} />
        <h4 className="labelText">Engineering</h4>
      </div>
      <div className="littlebox Cybersecurity">
        <h4 className="labelText">Cybersecurity</h4>
        <Numbers end={2} duration={8} />
        <h4 style={{ color: "#6c3ac5"}}> Eng</h4>
      </div>
      <div className="littlebox Sociology">
        <h4 className="labelText">Sociology</h4>
        <Numbers end={1} duration={8} />
        <h4 style={{ color: "#57a863"}}> Eng</h4>
      </div>
      <div className="littlebox Psychology">
        <h4 className="labelText">Psychology</h4>
        <Numbers end={1} duration={8} />
        <h4 style={{ color: "#eb98e9"}}> Eng</h4>
      </div>
      <div className="littlebox HealthSci">
        <h4 className="labelText">Health</h4>
        <Numbers end={1} duration={8} />
        <h4 className="labelText">Science</h4>
      </div>
      <div className="littlebox ChemEng">
        <h4 className="labelText">Chemical</h4>
        <Numbers end={1} duration={8} />
        <h4 className="labelText">Engineering</h4>
      </div>
      <div className="littlebox Economics">
        <h4 className="labelText">Economics</h4>
        <Numbers end={1} duration={8} />
        <h4 style={{ color: "#5175eb"}}> Eng</h4>
      </div>
    </section>
        <Sponsors24></Sponsors24>
      </section>
      {/* <App></App> */}
      {/* <TextSection backgroundColor={Colors.DARK_BLUE}>
        <Type size="h2" bold align="center">
          2024 Schedule available now!
        </Type>
        <div className="ch-button-container-center">
          <Button inverted internal to="/schedule/">
            View 2024 Schedule
          </Button>
          <Button inverted to="https://forms.gle/7eHo3s9RURLpvNtM9">
            Sign up for CornHacks 2024
          </Button>
        </div>
      </TextSection>
      <ImageSection
        image={"HomePage.jpeg"}
        backgroundColor={Colors.DARK_BLUE}
        maxWidth="500px"
      >
        <Type size="h5" color={Colors.WHITE}>
          CornHacks aims 2222 to bring some of the most talented developers from
          around the Midwest to join in a weekend full of hacking. Hosted at the
          University of Nebraska-Lincoln, over 150 participants will code all
          day and night to be assessed by industry professionals and compete for
          several prizes!
        </Type>
      </ImageSection>
      <div id="learn-more">
        <ImageSection
          image={"Gradiente.png"}
          backgroundColor={Colors.DARK_BLUE}
        >
          <Type size="h2" bold>
            FAQ
          </Type>
          <section className="vid">
            <div className="holder">
              <VideoPlayer />
            </div>
          </section>
          <Question question="What is a Hackathon?">
            A hackathon is an invention marathon. Students come together to
            build innovative software and hardware over an extended period. It's{" "}
            <a
              style={{ color: Colors.WHITE }}
              href="https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl"
            >
              very beginner friendly
            </a>{" "}
            and is designed to be engaging to students at all levels of
            experience. We would love for you to come and experience a hackathon
            for yourself!
          </Question>
          <Question question="Where and when will CornHacks take place?">
            CornHacks 2024 will start on Saturday, February 17, 2024, and will
            continue through Sunday, February 18, 2024 — with an optional info
            session at 3:00PM on Friday, February 16.
            <br />
            <br />
            The event will be hosted in person at the Johnny Carson Center for
            Emerging Media Arts; it will feature events, workshops, and
            keynotes. And rest assured: you will definitely still receive an
            abundance of swag and a chance at prizes. CornHacks registration
            will open in late November. Feel free to check back here for any
            updates!
          </Question>
          <Question question="What is the cost to attend CornHacks?">
            Nothing. $0.00. Free. There is no cost to attend CornHacks. We only
            ask you bring your creativity and skill.
          </Question>
          <Question question="Do I need any prior experience to register for CornHacks? What if this is my first hackathon?">
            There is no prior experience required to participate in CornHacks.
            Any and all student participants are welcome! We are happy to help
            you form a team, get started with your project, and have an awesome
            first hackathon!
          </Question>
          <Question question="Do I need to be a college student to attend?">
            Yes, attendees must be currently enrolled undergraduate students at
            a college/university. Additionally, attendees must be at or over 18
            years of age.
          </Question>
          <Question question="Do I need to form a team before I register? What do I do if I do not have a team?">
            Participants are not required to find a team prior to the event,
            although you are certainly welcome to do so. At the beginning of the
            event, we will host a session for all still looking to form a team
            so you can find others with whom you can work. Teams may have a
            maximum of four members.
          </Question>
          <Question question="Will there be any swag or prizes?">
            SO much swag, SO many prizes. All CornHacks attendees will receive a
            t-shirt, stickers, and tons of other goodies. Teams that win tiered
            or track prizes will also receive additional prizes; while this
            year’s prizes are still being determined, previous years have seen
            prizes such as flatscreen TVs, Nintendo Switches, and high-quality
            wireless headphones.
          </Question>
          <Question question="Are there rules for this event?">
            There are, in fact! Attendees will have to adhere to the{" "}
            <a
              style={{ color: Colors.WHITE }}
              href="https://studentconduct.unl.edu/student-code-conduct"
            >
              UNL Student Code of Conduct
            </a>
            . More specific rules may be prescribed by CornHacks organizers
            before or during the event.
          </Question>
          <Question question="Is there anything I need to do in advance?">
            There are a couple of things we would ask you do before the event
            begins: please fill out{" "}
            <a
              style={{ color: Colors.WHITE }}
              href="https://drive.google.com/file/d/1rzj9iy6urchwN2ixStTShniDrDNGx83p"
            >
              this photo release waiver
            </a>{" "}
            and{" "}
            <a
              style={{ color: Colors.WHITE }}
              href="https://forms.gle/7eHo3s9RURLpvNtM9"
            >
              this CornHacks participant survey
            </a>{" "}
            (you will be able to upload your photo release waiver when you fill
            out the registration survey).
          </Question>
        </ImageSection>
      </div>
      <TextSection backgroundColor={Colors.DARK_BLUE}>
        <Countdown
          date={ImportantDates.START_DATE}
          afterText="until Cornhacks"
        />
      </TextSection>
      <TextSection backgroundColor="#ffffff">
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

export default HomePage;
