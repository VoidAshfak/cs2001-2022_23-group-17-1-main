import React from "react";
import { useState } from 'react';
import "../css/TotalCalories.css";
import Slider from "./Slider";



const TotalCalories = () => {

const [showPopUp3, setShowPopUp3] = useState(false);

const handleButtonClick3 = () => {
    setShowPopUp3(true);
  };

  const handleClosePopUp3 = () => {
    setShowPopUp3(false);
  };

    return(
        <div >  
           <button className="TCbutton" onClick={handleButtonClick3}> 2. Set Total Calories </button> 
           {showPopUp3 && (
                    <div className="pop-up-content3">
                      <div> <Slider/> </div>
                      <div>
                        <button className="ClosePopup" 
                        onClick={handleClosePopUp3}>set </button>
                      </div>
                    </div>
                    )}       
        </div>
    )
}

export default TotalCalories;