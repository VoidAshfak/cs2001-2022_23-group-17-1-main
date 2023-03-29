import React, { useState } from "react";
import "../css/Slider.css"
import CalorieCalculator from "./CalorieCalculator";



function Slider() {
  const [sliderValue, setSliderValue] = useState('');
  const [inputValue, setInputValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setInputValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setSliderValue(inputValue);
  };

  const isPositive = sliderValue > 0;
  const isNegative = sliderValue < 0;


  // const [TotalCalories, setTotalCalories] = useState('');
 

  // const calculateTotalCalories = () => {
  //   const   TotalCalories= maintenanceCalories - sliderValue;
  //   setTotalCalories(TotalCalories);
  // };

  
  return (
    <div className="weight-slider">
      <h2 className={isPositive ? "positive" : ""}>Gain Weight</h2>
      <div className="slider-container">
        <input
          type="range"
          min="-1000"
          max="1000"
          value={sliderValue}
          onChange={handleSliderChange}
          
          className="slider"
        />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          
          onBlur={handleInputBlur}
          className="slider-input"
        />
        <span className="edit-text">Edit</span>
        <div></div>
      </div>
      <h2 className={isNegative ? "negative" : ""}>Lose Weight</h2>
    </div>
  );
}

export default Slider;




