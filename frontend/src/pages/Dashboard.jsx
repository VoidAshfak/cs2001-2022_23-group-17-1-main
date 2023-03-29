import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import Dashboard from '../css/Dashboard.css'
import groupImg from '../images/group.jpeg'
import girlImg from '../images/girl.webp'

function Home() {

  const navigate = useNavigate();

  const navigateToCalorieCalculator = () => {
    navigate("/caloriecalculator");
  };

  const navigateToWeightTracker = () => {
    navigate("/weighttracker");
  };

  const navigateToMealPlanner = () => {
    navigate("/mealplanner");
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (

    <>

    <Navbar/>

    <div className='DashboardContainer'>
      <div className='goal-box'>
      <img className='girlImg' src= {girlImg} alt=''/>
      {/* <h2>Welcome to Unitrition, click the button below to check your account profile</h2> */}
      <button onClick={navigateToProfile} className='caloriebutton'>
             Your account profile
          </button>
      <div className='box-1'>
      <img className='groupImg' src= {groupImg} alt=''/>
      <button onClick={navigateToWeightTracker} className='weightbutton'>
            Track your weight 
          </button>
          <button onClick={navigateToMealPlanner} className='mealplannerbutton'>
            Choose your next meal
          </button>
          <button onClick={navigateToCalorieCalculator} className='caloriebutton'>
            Calculate your calories
          </button>
      </div>
        <div className='box-2'>
          <div className='water-intake-card'>
          <div className='sleep-card'>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Home


