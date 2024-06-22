import React, { useRef, useState } from 'react';
import { Link, Element } from 'react-scroll';
import HomeHero from 'Pages/Home/Components/HomeHero';
import Sponsor24 from 'Pages/Sponsor/SponsorBar/Sponsors24';
import Sponsor23 from 'Pages/Sponsor/SponsorBar/Sponsors23';
import Sponsor22 from 'Pages/Sponsor/SponsorBar/Sponsors22';
import Sponsor21 from 'Pages/Sponsor/SponsorBar/Sponsors21';
import Sponsor20 from 'Pages/Sponsor/SponsorBar/Sponsors20';
import Sponsor19 from 'Pages/Sponsor/SponsorBar/Sponsors19';
import logo19 from "Images/cropped_raw.png";
import logo20 from "Graphics/cornhacks.svg";
import logo21 from "Graphics/logo21.svg";
import logo22 from "Images/logo22.png";
import logo23 from "Images/2023_final_logo_only.png";
import logo24 from "Graphics/corn3d.svg";
import thirdPlace24 from "Images/3rd_Place_Winners.jpg"
import secondPlace24 from "Images/2nd_Place_Winners.jpg"
import firstPlace24 from "Images/1st_Place_Winners.jpg"
import simulation24 from "Images/Simulation_Track_Winners.jpg"
import general24 from "Images/General_Track_Winners.jpg"
import story24 from "Images/Story_Track_Winners.jpg"

import './PastProjects.css';

function App() {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isReappearing, setIsReappearing] = useState(false);

  const playVideoAtDoubleSpeedAndFadeOut = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
      videoRef.current.play();
      setIsFading(true);
      setShowPlayButton(false);

      // After 4 seconds, fade out the video
      setTimeout(() => {
        setIsFading(false);
        setIsReappearing(true);

        // After 1 second, reappear and pause the video
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsReappearing(false);
            setShowPlayButton(true);
          }
        }, 1000);
      }, 4000);
    }
  };

  const resetAndPauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsFading(false);
      setShowPlayButton(true);
    }
  };

  const [overlayState, setOverlayState] = useState(false);

  return (
    <div className="App">
      <HomeHero showOverlay={() => setOverlayState(true)} />
      <header className="App-header">
        <p className={`PastProjectsTitle ${isFading ? 'turn' : ''}`}>Past Projects</p>
        <section className='vid'>
          <section className='content'>
            {showPlayButton ? (
              <Link to="2024" smooth={true} duration={2000}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='firstTextLink'>
                  <img src={logo24} className='logo' />2024: Beat the Odds
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2023" smooth={true} duration={2500}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='secondTextLink'>
                  <img src={logo23} className='logo' />2023: Cybersecurity
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2022" smooth={true} duration={3000}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='thirdTextLink'>
                  <img src={logo22} className='logo' />2022: Retro
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2021" smooth={true} duration={3500}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='fourthTextLink'>
                  <img src={logo21} className='logo' />2021: Looking Forward
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2020" smooth={true} duration={4000}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='fifthTextLink'>
                  <img src={logo20} className='logo' />2020: Going Green
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2019" smooth={true} duration={4500}>
                <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='sixthTextLink'>
                  <img src={logo19} className='logo' />2019: CornHacks 1
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            <div className='holder'>
              <video ref={videoRef} className={`video ${isFading ? 'fade-out' : isReappearing ? 'fade-in' : ''}`}>
                <source src={`${process.env.PUBLIC_URL}/output.mp4`} type="video/mp4" />
              </video>
              <div className={`text ${isFading ? 'fade-in' : 'fade-out'}`}>You just got CORNED</div>
            </div>
          </section>
        // </section>
      </header>
      <Element name="2024" className="elementStyle first">
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo24} className='logo' /><h2>2024: Beat the Odds</h2> <img src={logo24} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <a
              href="https://github.com/BALD-rs/lucky-liars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>1. Lucky Liars</h2>
            </a>
            <h5>[Blaine Traudt, Anton Angeletti, Louis Quattrocchi, Dawson McGahan]</h5>
            <img src={firstPlace24} alt='2024 First Place' style={{ width: '450px'}}/>
          </div>
          <div className="middleColumn">
            <a
              href="https://github.com/Zohair-Khan/CornHacks2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>2. Even Steven Beats the Odds</h2>
            </a>
            <h5>[Sebastian Wysocki, Zohair Khan, Joey Ng, Mayank Sharma]</h5>
            <img src={secondPlace24} alt='2024 Second Place' style={{ width: '450px'}}/>
          </div>
          <div className='rightColumn'>
            <a
              href="https://github.com/landrygeiger/cornhacks2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>3. Black Jack Optimal</h2>
            </a>
            <h5>[Landry Geiger, John Post, Roy Dumblauskas, Zach Wallenburg]</h5>
            <img src={thirdPlace24} alt='2024 Third Place' style={{ width: '450px'}}/>
        </div>
        </div>
        </div>
      <div className="elementContent details">
        <h1>Tracks</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <h2>Story</h2>
            <a
              href="https://github.com/WildkrattFan/CornHacks-2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Fortunes Gambit: Realm of Chance</h2>
            </a>
            <h5>[Zoe Kerchal, Owen Addison, Leo Martin, Andrew Wiebe]</h5>
            <img src={story24} alt='2024 Story Track Winners' style={{ width: '450px'}}/>
          </div>
          <div className="middleColumn">
            <h2>Simulation</h2>
            <a
              href="https://github.com/jackrankin/brAIn_rot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>brAIn rot</h2>
            </a>
            <h5>[Chaitra, Jack, Drew, Tong]</h5>
            <img src={simulation24} alt='2024 Simulation Track Winners' style={{ width: '450px'}}/>
          </div>
          <div className='rightColumn'>
            <h2>General</h2>
            <a
              href="https://github.com/j-seibel/better-front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Bet Better</h2>
            </a>
            <h5>[Gage Cammack, Dante Dyches-Chandler, Jake Rance, Joseph Seibel]</h5>
            <img src={general24} alt='2024 General Track Winners' style={{ width: '450px'}}/>
        </div>
        </div>
        <Sponsor24 />
      </div>
      </Element>
      <Element name="2023" className='elementStyle second'>
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo23} className='logo' /><h2>2023: Cybersecurity</h2> <img src={logo23} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <a
              href="https://github.com/NathanKolbas/GonePhishing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>1. Gone Phishing 2</h2>
            </a>
            <h5>[Abdullah Hamad, Nathan Kolbas]</h5>
          </div>
          <div className="middleColumn">
            <a
              href="https://github.com/j-seibel/GonePhishing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>2. Gone Phishing 4</h2>
            </a>
            <h5>[Gage Cammack, Dante Dyches-Chandler, Jake Rance, Joseph Seibel]</h5>
          </div>
          <div className='rightColumn'>
            <a
              href="https://frie.dev/vw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>3. VW</h2>
            </a>
            <h5>[Aaron Friesen]</h5>
        </div>
        </div>
        </div>
      <div className="elementContent details">
        <h1>Tracks</h1>
        <div className="separateColumns">
          <div className="middleColumn">
            <h2>Business</h2>
            <a
              href="https://github.com/ZWally/cornhacks2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Access Genie</h2>
            </a>
            <h5>[Landry Geiger, John Post, Roy Dumblauskas, Zach Wallenburg]</h5>
          </div>
        </div>
        <Sponsor23 />
      </div>
      </Element>
      <Element name="2022" className='elementStyle third'>
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo22} className='logo' /><h2>2022: Retro</h2> <img src={logo22} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <a
              href="https://github.com/BracciaCJ/2022-CornHacks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>1. Ha11y</h2>
            </a>
            <h5>[Colton Braccia, Tommy Braccia, Emma Hubka, Danny Tran]</h5>
          </div>
          <div className="middleColumn">
            <a
              href="https://github.com/picrossin/Weevil-Warrior-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>2. Weevil Warrior</h2>
            </a>
            <h5>[Jaden Goter, Camden Obertop, Erik Skoog]</h5>
          </div>
          <div className='rightColumn'>
              <h2>3. MusuCLI 2.0</h2>
        </div>
          <div className='farRightColumn'>
            <a
              href="https://github.com/Dillon-Howell/cornhacks-2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>4. BigBrother</h2>
            </a>
            <h5>[Nathan Kolbas, Dillon Howell]</h5>
        </div>
        </div>
        </div>
      <div className="elementContent details">
        <h1>Tracks</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <h2>Retro</h2>
              <h2>Retro Rerun</h2>
          </div>
          <div className="middleColumn">
            <h2>Hardware</h2>
            <a
              href="https://github.com/RyanOrth/Signos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Signos</h2>
            </a>
            <h5>[Eric Dundas, Zach Stanczyk, Ryan Orth, Garret Parker]</h5>
          </div>
        </div>
        <Sponsor22 />
      </div>
      </Element>
      <Element name="2021" className='elementStyle fourth'>
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo21} className='logo' /><h2>2021: Looking Forward</h2> <img src={logo21} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
            <a
              href="https://github.com/Bracciata/Cornhacks2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>1. Teddy</h2>
            </a>
            <h5>[Emma Hubka, Tommy Braccia, Danny Tran]</h5>
          </div>
          <div className="middleColumn">
            <a
              href="https://github.com/LukeAVanDrie/Cue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>2. TA-DA</h2>
            </a>
            <h5>[Patrick Murphy, Luke Van Drie, Antonio Linhart, Matthew Vavricek]</h5>
          </div>
          <div className='rightColumn'>
            <a
              href="https://github.com/sstream17/cornhacks-2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>3. coder_royale</h2>
            </a>
            <h5>[Spencer Stream, Syrus Bomberger]</h5>
        </div>
        </div>
        </div>
      <div className="elementContent details">
        <h1>Tracks</h1>
        <div className="separateColumns">
          <div className="middleColumn">
            <h2>Finance</h2>
            <a
              href="https://github.com/danielnoon/wehedge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>WeHedge</h2>
            </a>
            <h5>[Daniel Noon, Liam Seper, Ben Lohrman, Andrew Herold]</h5>
          </div>
        </div>
        <Sponsor21 />
      </div>
      </Element>
      <Element name="2020" className='elementStyle fifth'>
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo20} className='logo' /><h2>2020: Going Green</h2> <img src={logo20} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
              <h2>1. Draft Detector</h2>
          </div>
          <div className="middleColumn">
              <h2>2. Recyclo Bot</h2>
          </div>
          <div className='rightColumn'>
              <h2>3. Favor</h2>
        </div>
        </div>
        <Sponsor20 />
        </div>
      </Element>
      <Element name="2019" className='elementStyle sixth'>
      <div className="elementContent content">
         <div className='elementTitle'><img src={logo19} className='logo' /><h2>2019: CornHacks 1</h2> <img src={logo19} className='logo' /></div>
      </div>
      <div className="elementContent details">
        <h1>Overall</h1>
        <div className="separateColumns">
          <div className="leftColumn">
              <h2>1. Ad Free Spotify</h2>
          </div>
          <div className="middleColumn">
              <h2>2. Jaden Void</h2>
          </div>
          <div className='rightColumn'>
              <h2>3. EZ Farming</h2>
        </div>
        </div>
        <Sponsor19 />
        </div>
      </Element>
    </div>
  );
}

export default App;
