import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowDownCircleFill, BsArrowDownCircle } from "react-icons/bs";
// import TextField from "@mui/material/TextField";
// import TextField from '@material-ui/core/TextField';
import { Link } from "react-scroll";
import axios from "axios";

import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Footer from "./Footer";

import "../css/heroo.css";
import "../css/loginmodal.css";
import "../css/navbar.css";

const Heroo = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const router = (route) => {
  //   let path = "/" + route;
  //   navigate(path);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios.get("/user").then((response) => {
  //     console.log(response.data);
  //     response.data.forEach((user) => {
  //       if (username === users.username && password === users.password) {
  //         localStorage.setItem("emailData", user.email);
  //         localStorage.setItem("userID", user.userID);
  //         router("dashboard");
  //       }
  //       else {
  //         setError("Invalid login. Please try again.");
  //       }
  //     })
  //   })
  // }

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const navigateToLogin = () => {
    navigate("/Loginpage");
  };

  // toggle mobile icon DropdownMenu change
  const setMenuBarClass = useState("MenuBar unclicked");
  const setMenuClass = useState("DropdownMenu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuBarClass("MenuBar clicked");
      setMenuClass("DropdownMenu visible");
    } else {
      setMenuBarClass("MenuBar unclicked");
      setMenuClass("DropdownMenu hidden");
    }
  };

  const setCloseClass = useState("Close Unclicked");
  const setLoginModalClass = useState("Modal Hidden");
  const [isModalClicked, setIsModalClicked] = useState(false);

  const updateModal = () => {
    if (!isModalClicked) {
      setCloseClass("Close Clicked");
      setLoginModalClass("Modal Visible");
    } else {
      setCloseClass("Close Unlicked");
      setLoginModalClass("Modal Hidden");
    }
  };

  return (
    <>
      {/* Navbar Component here: */}

      <div className="Nav">
        <div className="NavContainer">
          {/* This is the div that contains the navbar logo */}
          <div className="NavLogo">
            <img className="NavIcon" src="./assets/images/BW-Logo.png" />
            <p>Unitrition</p>
          </div>

          <div className="MobileIcon">
            {isMenuClicked ? (
              <i className="fas fa-xmark" />
            ) : (
              <i className="fas fa-bars-staggered" />
            )}
          </div>

          {/* This div holds all the items in the navbar menu */}

          <div className="NavMenu">
            <div className="NavItem">
              <Link
                onClick={() => window.location.replace("/#about")}
                className="NavLink"
                to="about"
                spy={true}
                offset={-100}
                duration={500}
              >
                About Us
              </Link>
            </div>
            <div className="NavItem">
              <Link
                onClick={() => window.location.replace("/#why")}
                className="NavLink"
                to="why"
                spy={true}
                offset={-100}
                duration={500}
              >
                Why Us
              </Link>
            </div>
            <div className="NavItem">
              <Link
                onClick={() => window.location.replace("/#services")}
                className="NavLink"
                to="services"
                spy={true}
                offset={-150}
                duration={500}
              >
                Services
              </Link>
            </div>
          </div>

          <div className="NavBtnContainer">
            <div className="NavBtn">
              <button className="NavBtnLink" onClick={navigateToLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Container Here: */}

      {/* <div className='HeroContainer1'>
      <div className='HeroContentContainer1'>
      <div className='HeroBg'>
        <video className='VideoBg' autoPlay loop muted src='./assets/videos/video1.mp4' type='video/mp4' />
      </div> 
      <div className='HeroContent1'>
        <h1>Prioritise your health</h1>
        <p></p>
        <div className='BtnWrapper'>
          <button className='Btn' >
            Login
            <div className='BtnIconWrapper'>
            </div>
          </button>
        </div>
      </div>
    </div>
    </div> */}

      <Hero />

      {/* Login Modal Here: */}

      <form
        id="loginModal"
        className={isModalClicked ? "Modal" : "ModalHidden"}
      >
        <div className="ModalContent">
          <div className="ModalHeader">
            <span
              className="Close"
              onClick={() => updateModal(setIsModalClicked(!isModalClicked))}
            >
              &times;
            </span>
            <h2>User Login</h2>
          </div>
          <div className="ModalBody">
            {/* <p>Some text in the Modal Body</p>
          <p>Some other text...</p> */}
            <div className="ModalInputContainer">
              {/* <TextField
              className='ModalEntry'
              id='standart-basic' 
              label='Enter Username...' 
              variant="standard" 
              size='50px' 
              margin-bottom='20px'/>
            <TextField 
              id='standart-basic' 
              label='Enter Password...' 
              type='password'
              variant="standard" 
              size='50px' 
              margin-bottom='20px'/> */}
            </div>
            <div className="ModalBtnContainer">
              <button
                className="ModalBtn"
                onClick={navigateToDashboard}
                // onSubmit={handleSubmit}
                // onChange={(e) => setPassword(e.target.value)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>

      <AboutUs />
      <WhyUs />
      <Services />
      <Footer />
    </>
  );
};

export default Heroo;
