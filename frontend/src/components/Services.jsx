import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/services.css";

function Services() {
  const navigate = useNavigate();

  const navigateToCalorieCalculator = () => {
    navigate("/caloriecalculator");
  };

  const navigateToCalorieTracker = () => {
    navigate("/calorietracker");
  };

  const navigateToWeightTracker = () => {
    navigate("/weighttracker");
  };

  const navigateToMealPlanner = () => {
    navigate("/mealplanner");
  };

  return (
    <div id="services" className="ServicesContainer">
      <div className="ServicesContentContainer">
        <div className="ServicesTextContainer">
          <p className="ServicesTopLine">Our Services</p>
        </div>
        <div className="ServicesContentSubContainer">
          <div className="SingleService">
            <div
              className="SingleServiceHeading"
              onClick={navigateToWeightTracker}
            >
              <p className="featuress">Weight Tracker</p>
            </div>
          </div>

          <div className="SingleService">
            <div
              className="SingleServiceHeading"
              onClick={navigateToCalorieCalculator}
            >
              <p className="featuress">Calorie Calculator</p>
            </div>
          </div>

          <div className="SingleService">
            <div
              className="SingleServiceHeading"
              onClick={navigateToCalorieTracker}
            >
              <p className="featuress">Calorie Tracker</p>
            </div>
          </div>

          <div className="SingleService">
            <div
              className="SingleServiceHeading"
              onClick={navigateToMealPlanner}
            >
              <p className="featuress">Meal Planner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
