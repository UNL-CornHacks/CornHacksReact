import React from "react";
import olsson from "../../Images/olsson.png"
import conagra from "../../Images/conagra.png"
import DPL from "../../Images/DPL_logo_2018_rgb.png"
import belcan from "../../Images/belcan.jpeg"
import licor from "../../Images/licor.jpg"

import "./Styles/SponsorCarousel.css";


function HomeCarousel() {
  return (
    <div className='sponsors'>
       <img src={olsson} />
       <img src={conagra} />
       <img src={DPL} />
       <img src={belcan} />
       <img src={licor} />
    </div>
  );
}

export default HomeCarousel;