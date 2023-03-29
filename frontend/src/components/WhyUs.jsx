import React, { useEffect } from "react";
import "../css/whyus.css";

function WhyUs() {
  return (
    <div id="why" className="DarkContainer">
      <div className="DarkSectionContainer">
        <div className="DarkContentRow">
          <div className="DarkContentColumn">
            <div className="DarkContentColumnImgWrapper">
              <img
                className="DarkContentColumnImg"
                src="./assets/images/About2.svg"
                alt=""
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <div className="DarkContentColumn">
            <div className="DarkTextWrapper">
              <div className="DarkTopLine">Why Us</div>
              <div className="DarkHeading">Prioritise your health</div>
              <div className="DarkSubtitle">
                With our meal planner feature, we ensure that all your
                nutritional requirements are met. You will be recomended meals
                based on suggested caloric intake and ingredient preferences
                which means no more hastle of searching the net for specific
                recipes!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
