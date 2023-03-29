import React from "react";
import Navbar from "../components/Navbar";
import "../css/CalorieCalculator.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import TotalCalories from "./TotalCalories";
import caloImg from '../images/caloimg.png';
import FetchCalories from "./FetchCalories";

  const CalculateCalories = () => {

  //Calculating Maintenance calories
  const userID = 1;

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeights] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [maintenanceCalories, setMaintenanceCalories] = useState('');

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeights(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

    //Calculation for maintenance calories
    const handleSubmit = (e) => {
    e.preventDefault();
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const maintenanceCalories = bmr * activityLevel;
    setMaintenanceCalories(maintenanceCalories);
    };

  //Calculating BMI and suggesting 
  const [bmi, setBMI] = useState(0);
  const [isHealthyWeight, setIsHealthyWeight] = useState(false);
  const [suggestedWeightRange, setSuggestedWeightRange] = useState("");
  const [suggestedCalorie, setSuggestedCalorie] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
    setIsHealthyWeight(bmiValue >= 18.5 && bmiValue <= 24.9);
    setSuggestedWeightRange(
      `${(18.5 * heightInMeters * heightInMeters).toFixed(2)}kg - ${(24.9 * heightInMeters * heightInMeters).toFixed(2)}kg `
    );
    if (bmiValue < 18.5) {
      const suggestedWeight = 18.5 * heightInMeters * heightInMeters;
      const calorieDeficit = (weight - suggestedWeight) * 7700;
      setSuggestedCalorie(`You need to add calories per day to reach a healthy weight.`);
      // setSuggestedCalorie(`You need to add ${Math.round(calorieDeficit/7)} calories per day to reach a healthy weight.`);
    } else if (bmiValue > 24.9) {
      const suggestedWeight = 24.9 * heightInMeters * heightInMeters;
      const calorieSurplus = (suggestedWeight - weight) * 7700;
      setSuggestedCalorie(`You need to reduce calories per day to reach a healthy weight.`);
      // setSuggestedCalorie(`You need to reduce ${Math.round(calorieSurplus/7)} calories per day to reach a healthy weight.`);
    }
  };

  
  //Calculating Remaining Calories after every meal
  // const [consumedCalorie, setConsumedCalorie] = useState([]);
  //const [remainingCalorie, setRemainingCalorie] = useState();
  
  // const handleConsumedCalorieChange = (event) => {
  //   setConsumedCalorie(Number(event.target.value));
  // };

  //   const calculateRemainingCalorie = () => {
  //   const remainingCalorie = calories - consumedCalorie;
  //   setRemainingCalorie(remainingCalorie);
  // };

  

  //Calculating Total Calories after choose a calorie amount to lose or gain weight
  const [inputValue, setInputValue] = useState();
  //const [TotalCalorie, setTotalCalorie] = useState([]);
  // const [calories, setCalories] = useState(null);
  // const [message, setMessage] = useState('');
  // const [error, setError] = useState(null);
  // const calorie = {TotalCalorie};
  const InputChange = (event) => {
    setInputValue(Number(event.target.value));
  };
 
  // const calculateTotalCalorie = () => {
  //   const TotalCalorie = maintenanceCalories + inputValue;
  //   setCalories(TotalCalorie);}
  

  const calculateTotalCalorie = async () => {
    const TotalCalorie = maintenanceCalories + inputValue;
    const newCalories = {calories:TotalCalorie, userID}
    try {
      const result = await axios.post(`/calories`, newCalories);
      console.log(result);
      //fetchData(userID);
    } catch (error) {
      console.error("Error adding Total Calories to the database ", error);
    }
  }; 


  // const fetchData = async (userID) => {
  //   try {
  //     const result = await axios.get(`/calories/${userID}`);
  //     setCalories(result.data.calories);
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error fetching calories: ", error);
  //     setError("An error occurred while fetching calories. Please try again later.");
  //   }
  // };

  // useEffect(() => {
  //   fetchData(userID);
  // }, [userID]);

  const handleDeleteAllCalories= async () => {
    try {
      const result = await axios.delete('/calories'); //deletes all Calories 
      console.log(result);
    } catch (error) {
      console.error('Error deleting calories:', error); // Error
    }
    
  };

        const [showPopUp, setShowPopUp] = useState(false);
        //const [showPopUp1, setShowPopUp1] = useState(false);
        //const [showPopUp2, setShowPopUp2] = useState(false);
  
        //const [value, setValue] = useState('');
  
         const handleButtonClick = () => {
          setShowPopUp(true);
         };
        //  const handleButtonClick1 = () => {
        //   setShowPopUp1(true);
        //  };
         const handleClosePopUp = () => {
          setShowPopUp(false);
         };
  
  return (
    <>
     <Navbar/>
      <div className="CalorieMainContainer">
        <div>
          <div>
            <h1 className="MainText"> Calorie Calculator </h1>
              </div>
                <div>
                  <h2 className="SubHeader"> Your daily caloric intake calculator! </h2>
                   </div>           
                     {/* <div className="Remainingcalories" > 
                      <div> <p>Your total calories for today: 1822.0</p> </div> */}
                      {/* <h2>Calories for User {userID}</h2>
                       {calories && <p>{calories} calories</p>}
                       {console.log("Calories rendered: ", calories)} */}
                      {/* <div>Remaining calories: {remainingCalorie}</div>  
                     </div>  */}
                    <div>
                    <FetchCalories/>
                    </div>
                     <div><TotalCalories/></div>
                     <button className="Deletebutton" onClick={handleDeleteAllCalories}>Delete recorded Calories</button>
                     <img className='caloimg' src= {caloImg} alt=''/>
                 <div>
                 <button 
                    className= "Maintenancebutton" onClick={handleButtonClick}
                    style={{ display: 'flex', justifyContent: 'center'}}> 
                    1. set Maintenance Calories
                 </button>
                  {showPopUp && (
                    <div className="pop-up-box">
                     
                      <br></br> 
                      <h1>Maintenance Calculator</h1>
                      <br></br>
                      <form  onSubmit={handleSubmit}>
                       <div>
                        <label className="callabels" htmlFor="age">Age:</label>
                        <input className="inputfeilds" type="text" id="age" value={age} onChange={handleAgeChange} />
                       </div>
                       <div>
                        <label className="callabels" htmlFor="gender">Gender:</label>
                        <select className="inputfeilds" id="gender" value={gender} onChange={handleGenderChange}>
                           <option value="">Select Gender</option>
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                        </select>
                       </div>
                       <div>
                         <label className="callabels" htmlFor="weight">Weight (kg):</label>
                         <input className="inputfeilds" type="text" id="weight" value={weight} onChange={handleWeightChange} />
                       </div>
                       <div>
                         <label className="callabels" htmlFor="height">Height (cm):</label>
                         <input className="inputfeilds" type="text" id="height" value={height} onChange={handleHeightChange} />
                       </div>
                       <div>
                        <label className="callabels" htmlFor="activityLevel">Activity Level:</label>
                          <select className="inputfeilds" id="activityLevel" value={activityLevel} onChange={handleActivityLevelChange}>
                           <option value="">Select Activity Level</option>
                           <option value="1.2">Sedentary (Little or no exercise)</option>
                           <option value="1.375">Lightly Active (Light exercise/sports 1-3 days a week)</option>
                           <option value="1.55">Moderately Active (Moderate exercise/sports 3-5 days a week)</option>
                           <option value="1.725">Very Active (Hard exercise/sports 6-7 days a week)</option>
                           <option value="1.9">Super Active (Very hard exercise/training twice a day)</option>
                           </select>
                       </div>
                       <button  onClick={handleClosePopUp} className="ClosePopup" >close</button> 
                      
                       <button  className="cbutton-8" onClick={CalculateCalories}>Calculate</button>
                       <div className="calresult" > 
                        {maintenanceCalories > 0 &&
                       <p> Your estimated maintenance calories is: {maintenanceCalories}
                       </p>
                       }
                       </div>
                       </form>
                       
                       <button  className="cbutton-7"  onClick={calculateBMI}>Calculate BMI</button>
                       {bmi > 0 && (
                       <div className="calresult1">
                        <p>Your BMI is {bmi}</p>
                        {isHealthyWeight ? (
                        <p>You are within the healthy weight range. <br></br>To lose or gain weight set total calories</p>
                        ) : (
                       <div>
                         <p>You are not within the healthy weight range</p>
                         <p>Suggested weight range: {suggestedWeightRange}</p>
                         {suggestedCalorie && <p>{suggestedCalorie}</p>}
                       </div>
                       )}
                       </div>
                       )}
                       <form onSubmit={calculateTotalCalorie}>
                         <input className="inputcalories1" type="number" value={inputValue} onChange={InputChange} ></input> 
                         <button className="cbutton-6"  value="double">Input +/- calories</button>
                       </form> 
                       
                     </div>
                     )}
                   
                 </div>   


               
         </div>
      </div> 
    </>
  );
};

export default CalculateCalories;


