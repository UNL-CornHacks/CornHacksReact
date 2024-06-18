// import React from "react";
// import GradientHero from "GlobalComponents/GradientHero";
// import Colors from "Constants/Colors";

// import "../Styles/HomeHero.css";

// import Type from "GlobalComponents/Type";
// import Button from "GlobalComponents/Button";

// const HomeHero = ({ showOverlay }) => {
//   return (
//     <GradientHero
//       colors={[Colors.YELLOW, Colors.GREEN, Colors.BLUE]}
//       height="70vh"
//       header
//       boxShadow
//     >
//       <Type className="ch-home-hero-text" size="h1" bold align="center">
//         CORNHACKS 2024
//       </Type>
//       <Type size="h4" align="center">
//         The University of Nebraska's Student-Led Hackathon
//       </Type>
//       <div className="ch-button-container-center">
//         <Button internal to="/sponsor/">
//           Sponsor
//         </Button>
//         <Button internal to="/organize/">
//           Help Organize
//         </Button>
//         <Button to="https://forms.gle/7eHo3s9RURLpvNtM9">Register</Button>
//         <Button to="https://drive.google.com/file/d/1rzj9iy6urchwN2ixStTShniDrDNGx83p">
//           Photo Release
//         </Button>
//         <Button anchor to="#learn-more">
//           Learn More
//         </Button>
//       </div>
//     </GradientHero>
//   );
// };

// export default HomeHero;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import corn from '../../../Graphics/corn3d.svg'
import GradientHero from "GlobalComponents/GradientHero";
import Colors from "Constants/Colors";

import "../Styles/HomeHero.css";

function HomeHero() {
  return (
    <GradientHero
      colors={[Colors.TEAL, Colors.BLUE, Colors.MUTED_PINK]}
      height="70vh"
      header
      boxShadow
    >
    <header className="header">
      <nav className="nav container">
        {/* <Navbar expand="lg" className="bg-body-tertiary">
          <Container className='navbar'>
            <Nav.Link href="#home"><img src={corn} width={100} height={100} alt="3D Corn Logo"/></Nav.Link>
            <Navbar.Brand href="#home"><h2 className="CornText">Corn<span className="HacksText">Hacks</span></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="pages">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      </nav>
    </header>
    </GradientHero>
  );
}

export default HomeHero;
