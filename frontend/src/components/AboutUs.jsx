import React from "react";
import "../css/aboutus.css";

function AboutUs() {
  return (
    <div id="about" className="LightContainer">
      <div className="LightSectionContainer">
        <div className="LightContentRow">
          <div className="LightContentColumn">
            <div className="LightTextWrapper">
              <div className="LightTopLine">About Us</div>
              <div className="LightHeading">Unitrition</div>
              <div className="LightSubtitle">
                Your one spot for fitness and Health Tracking! We provide you
                with all the tools you need from weight tracking stats to
                Caloric Intake calculations. We have various recipes that you
                can choose from based on your health preferences. Unitrition is
                the investment to your future health & wellness
              </div>
            </div>
          </div>
          <div className="LightContentColumn">
            <div className="ContentColumnImgWrapper">
              <img
                src="./assets/images/Why.svg"
                alt=""
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
