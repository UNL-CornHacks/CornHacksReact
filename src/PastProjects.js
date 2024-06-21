// import React, { useRef, useEffect } from 'react';
// import 'App.css';
// import VideoPlayer from 'VideoPlayer';

// function App() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);

//   const handleScroll = () => {
//     if (videoRef.current && sectionRef.current) {
//       // Calculate the total height of the section
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollY = window.scrollY;

//       // Calculate the scroll percentage (0 to 1)
//       const scrollPercentage = scrollY / totalHeight;

//       // Calculate the new video time based on the scroll percentage
//       const newTime = videoRef.current.duration * scrollPercentage;

//       // Set the new video time
//       videoRef.current.currentTime = newTime;
//     }
//   };

//   useEffect(() => {
//     // Perform actions on the <section className='vid'> element
//     if (sectionRef.current) {
//       console.log(sectionRef.current); // This is your <section> element
//       // You can now query the <video> element inside this section if needed
//       const video = sectionRef.current.querySelector('video');
//       if (video) {
//         video.pause(); // Equivalent to vid.pause() in your initial example
//       }
//     }

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up scroll event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <section className='vid' ref={sectionRef}>
//           <VideoPlayer videoRef={videoRef} />
//         </section>
//         <div className='holder'></div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useEffect } from 'react';
// import 'App.css';
// import VideoPlayer from 'VideoPlayer';

// function App() {
//   const videoRef = useRef(null);

//   const handleScroll = () => {
//     if (videoRef.current) {
//       // Calculate the total height of the document
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollY = window.scrollY;

//       // Calculate the scroll percentage (0 to 1)
//       const scrollPercentage = scrollY / totalHeight;

//       // Calculate the new video time based on the scroll percentage
//       const newTime = videoRef.current.duration * scrollPercentage;

//       // Set the new video time
//       videoRef.current.currentTime = newTime;
//     }
//   };

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up scroll event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <section className='vid'>
//         </section>
//         <div className='holder'></div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import 'App.css';
// import VideoPlayer from 'VideoPlayer'; // Make sure you have this component

// function App() {
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const [updateCounter, setUpdateCounter] = useState(0); // Counter for video updates
//   const scrollYRef = useRef(0);
//   const isScrollingRef = useRef(false);
//   const videoRef = useRef(null);

//   const calculateScrollPercentage = useCallback(() => {
//     const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollY = scrollYRef.current;

//     // Calculate the scroll percentage (0 to 100)
//     const scrollPercent = (scrollY / totalHeight) * 100;
//     setScrollPercentage(scrollPercent);

//     // Update the video time based on the scroll percentage
//     if (videoRef.current) {
//       const newTime = (videoRef.current.duration * scrollPercent) / 100;
//       videoRef.current.currentTime = newTime;

//       // Increment the update counter
//       setUpdateCounter((prevCounter) => prevCounter + 1);
//     }
//   }, []);

//   const handleScroll = useCallback(() => {
//     scrollYRef.current = window.scrollY;
//     if (!isScrollingRef.current) {
//       isScrollingRef.current = true;
//       requestAnimationFrame(updateScrollPercentage);
//     }
//   }, []);

//   const updateScrollPercentage = useCallback(() => {
//     calculateScrollPercentage();
//     if (isScrollingRef.current) {
//       requestAnimationFrame(updateScrollPercentage);
//     } else {
//       isScrollingRef.current = false;
//     }
//   }, [calculateScrollPercentage]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <section className='vid'>
//           <VideoPlayer videoRef={videoRef} />
//           <h1>Scroll down the page</h1>
//           <div style={{ height: '2000px' }}></div>
//         </section>
//         <div className='holder'></div>
//       </header>
//       <div className="scroll-percentage">
//         Scroll Percentage: {scrollPercentage.toFixed(2)}%
//       </div>
//       <div className="update-counter">
//         Video Update Counter: {updateCounter}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useRef, useState } from 'react';
// import './App.css';

// const App = () => {
//   const videoRef = useRef(null);
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const video = videoRef.current;
//   const duration = video.duration;

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = (scrollTop / docHeight) * 100;
//     setScrollPercentage(scrolled);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (video) {
//       if (duration) {
//         const currentTime = (scrollPercentage / 100) * duration;
//         video.currentTime = currentTime;
//       }
//     }
//   }, [scrollPercentage]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Scroll to Sync with Video</h1>
//       </header>
//       <main>
//         <div style={{ height: '2000px' }}>
//           <p>Scroll down to sync with the video...</p>
//         </div>
//         <section className="vid">
//         <video
//           ref={videoRef}
//           src="output.mp4" // Replace with your video file path
//           onLoadedMetadata={() => {
//             videoRef.current.currentTime = (scrollPercentage / 100) * videoRef.current.duration;
//           }}
//         />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useState } from 'react';
// import './App.css';
// import VideoPlayer from './VideoPlayer';

// function App() {
  
//   const videoRef = useRef(null);
//   const [isFading, setIsFading] = useState(false);
//   const [showPlayButton, setShowPlayButton] = useState(true);
//   // const [showText, setShowText] = useState(false); // Manages the visibility of the text

//   const playVideoAtDoubleSpeedAndFadeOut = () => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 3.0;
//       videoRef.current.play();
//       setIsFading(true); // Trigger the fade-out effect
//       setShowPlayButton(false); // Hide the play button and show the reset button
//       // setShowText(true);
//     }
//   };

//   const resetAndPauseVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset to the beginning
//       setIsFading(false); // Remove the fade-out effect
//       setShowPlayButton(true); // Show the play button and hide the reset button
//       // setShowText(false);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//          <section className='vid'>
//           <section className='content'>
//              {showPlayButton ? (
//             <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='firstTextLink'>2025: BananaHacks</button>
//       ) : (
//            <button onClick={resetAndPauseVideo} className='secondTextLink'>2024: Beat the Odds</button>
//       )}
//            <p className='thirdTextLink'>2023: jkjkHacks</p>
//            <p className='fourthTextLink'>2022: BdfsdfnaHacks</p>
//           <div className='holder'>
//           <video ref={videoRef} className={`video ${isFading ? 'fade-out' : ''}`}>
//           <source src={`${process.env.PUBLIC_URL}/output.mp4`} type="video/mp4" />
//           </video>
//             {/* <VideoPlayer ref={videoRef} className={`video ${isFading ? 'fade-out' : ''}`}/> */}
//             </div>
//             <div className={`text-container ${isFading ? 'fade-in' : 'fade-out'}`}>
//               <div className="text fly-in">This text appears when the video plays at double speed.</div>
//             </div>
//           </section>
//         </section>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from 'react';
// import { Link, Element, animateScroll as scroll } from 'react-scroll';
// import HomeHero from 'Pages/Home/Components/HomeHero';
// import logo19 from "Images/cropped_raw.png"
// import logo20 from "Graphics/cornhacks.svg"
// import logo21 from "Graphics/logo21.svg"
// import logo22 from "Images/logo22.png"
// import logo23 from "Images/2023_final_logo_only.png"
// import logo24 from "Graphics/corn3d.svg"

// import './PastProjects.css';

// function App() {
//   const videoRef = useRef(null);
//   const [isFading, setIsFading] = useState(false);
//   const [showPlayButton, setShowPlayButton] = useState(true);

//   const playVideoAtDoubleSpeedAndFadeOut = () => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 3.0;
//       videoRef.current.play();
//       setIsFading(true); // Trigger the fade-out effect
//       setShowPlayButton(false); // Hide the play button and show the reset button
//     }
//   };

//   const resetAndPauseVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset to the beginning
//       setIsFading(false); // Remove the fade-out effect
//       setShowPlayButton(true); // Show the play button and hide the reset button
//     }
//   };

//   const [overlayState, setOverlayState] = useState(false);

//   return (
//     <div className="App">
//       <HomeHero showOverlay={() => setOverlayState(true)} />
//       <header className="App-header">
//         <p className={`PastProjectsTitle ${isFading ? 'turn' : ''}`}>Past Projects</p>
//         <section className='vid'>
//           <section className='content'>
//             {showPlayButton ? (
//             <Link to="section1" smooth={true} duration={2000}>
//               <button onClick={playVideoAtDoubleSpeedAndFadeOut} className='firstTextLink'><img src={logo24} className='logo'/>2024: Beat the Odds</button>
//             </Link>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             {showPlayButton ? (
//             <button className='secondTextLink'><img src={logo23} className='logo'/>2023: Cybersecurity</button>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             {showPlayButton ? (
//             <button className='thirdTextLink'><img src={logo22} className='logo'/>2022: Retro</button>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             {showPlayButton ? (
//             <button className='fourthTextLink'><img src={logo21} className='logo'/>2021: Looking Forward</button>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             {showPlayButton ? (
//             <button className='fifthTextLink'><img src={logo20} className='logo'/>2020: Going Green</button>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             {showPlayButton ? (
//             <button className='sixthTextLink'><img src={logo19} className='logo'/>2019: Cornhacks 1</button>
//       ) : (
//             <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
//       )}
//             <div className='holder'>
//               <video ref={videoRef} className={`video ${isFading ? 'fade-out' : ''}`}>
//                 <source src={`${process.env.PUBLIC_URL}/output.mp4`} type="video/mp4" />
//               </video>
//               <div className={`text ${isFading ? 'fade-in' : 'fade-out'}`}>This text appears when the video plays at double speed.</div>
//             </div>
//           </section>
//         </section>
//       </header>
//       <Element name="section1" style={{ height: '100vh', background: 'lightblue' }}>
//         <h2>Section 1</h2>
//       </Element>
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from 'react';
import { Link, Element } from 'react-scroll';
import HomeHero from 'Pages/Home/Components/HomeHero';
import logo19 from "Images/cropped_raw.png";
import logo20 from "Graphics/cornhacks.svg";
import logo21 from "Graphics/logo21.svg";
import logo22 from "Images/logo22.png";
import logo23 from "Images/2023_final_logo_only.png";
import logo24 from "Graphics/corn3d.svg";

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
              <Link to="2023" smooth={true} duration={2000}>
                <button className='secondTextLink'>
                  <img src={logo23} className='logo' />2023: Cybersecurity
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2022" smooth={true} duration={2000}>
                <button className='thirdTextLink'>
                  <img src={logo22} className='logo' />2022: Retro
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2021" smooth={true} duration={2000}>
                <button className='fourthTextLink'>
                  <img src={logo21} className='logo' />2021: Looking Forward
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2020" smooth={true} duration={2000}>
                <button className='fifthTextLink'>
                  <img src={logo20} className='logo' />2020: Going Green
                </button>
              </Link>
            ) : (
              <button onClick={resetAndPauseVideo} className='backLink'>&lt;- BACK</button>
            )}
            {showPlayButton ? (
              <Link to="2019" smooth={true} duration={2000}>
                <button className='sixthTextLink'>
                  <img src={logo19} className='logo' />2019: Cornhacks 1
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
      <Element name="2024" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2024</h2>
      </Element>
      <Element name="2023" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2023</h2>
      </Element>
      <Element name="2022" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2022</h2>
      </Element>
      <Element name="2021" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2021</h2>
      </Element>
      <Element name="2020" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2020</h2>
      </Element>
      <Element name="2019" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>2019</h2>
      </Element>
    </div>
  );
}

export default App;
