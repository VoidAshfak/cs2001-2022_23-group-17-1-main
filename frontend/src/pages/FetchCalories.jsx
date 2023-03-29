import React from "react";
import Navbar from "../components/Navbar";
import "../css/CalorieCalculator.css";
import { useState, useEffect } from 'react';
import axios from "axios";



function FetchCalories(props) {
  const [calories, setCalories] = useState([]);
  const [consumed, setConsumed] = useState([]);
  const [totalConsumed, setTotalConsumed] = useState(0);

  useEffect(() => {
    axios.get('/calories/1')
      .then(res => {
        const latestCalories = res.data[res.data.length - 1];
        setCalories(latestCalories);
        setTotalConsumed(latestCalories.consumed);
        console.log(latestCalories);
      })
      .catch(err => console.log(err));
  }, []);


  // const handleSubmit1 = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post('/calories', {
  //       consumed:parseInt(consumedCalorie), userID: userID
  //     });
  //     setRemainingCalorie(remainingCalorie + response.data.consumed);
  //     setConsumedCalorie("");
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [showPopUp1, setShowPopUp1] = useState(false);

  const handleButtonClick1 = () => {
    setShowPopUp1(true);
   };


  const handleInputChange = e => {
    setConsumed(parseInt(e.target.value));
  }

  const handleSubmit1 = e => {
    e.preventDefault();

    const updatedConsumed = totalConsumed + consumed;
    setTotalConsumed(updatedConsumed);

    const updatedCalories = {
      ...calories,
      consumed: updatedConsumed
    }

    axios.put(`/calories/${calories.caloriesID}`, updatedCalories)
    .then(res => {
      setCalories(updatedCalories);
      setConsumed(0);
      console.log(updatedCalories);
    })
    .catch(err => console.log(err));
}



      return (



    <><div className="Remainingcalories">
          <div> <p>Your total calories for today: {calories && calories.calories ? calories.calories : 0}</p> </div>
          <div>Consumed calories: <span className="consumed-number" style={{ color: "" }}>
          {calories && calories.consumed ? calories.consumed + consumed : consumed}
        </span></div>
          
        </div>
        
        <div className="ConsumedCalories">
            <h3 className="text1" style={{ color: 'white' }}><br />let’s find out how many calories you have remaining</h3>
            <div>
              <button className="option1button" onClick={handleButtonClick1}>Input calories consumed</button>
              {showPopUp1 && (
                <div className="pop-up-content1">
                  <form onSubmit={handleSubmit1}>
                   <input className="inputcalories" type="number" value={consumed} onChange={handleInputChange} />
                    {/* <button  onClick={calculateRemainingCalorie}>Enter</button> */}
                    <button className="ClosePopup">Enter</button>
                  </form>
                </div>
              )}
            </div>
          </div></> 






//  );


  );
}
export default FetchCalories;


{/* <div>
      <h2>Calories for User 1</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Calories</th>
            <th>Consumed</th>
          </tr>
        </thead>
        <tbody>
          {calories.map(calorie => (
            <tr key={calorie.caloriesID}>
              <td>{calorie.caloriesID}</td>
              <td>{calorie.userID}</td>
              <td>{calorie.calories}</td>
              <td>{calorie.consumed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
  

    {/* <div>
      <h2>Calories for User 1</h2>
      <p>Latest Calories: {calories.calories}</p>
      <p>Latest Consumed: {calories.consumed}</p>
    </div> */}


  //   <div className="ConsumedCalories">
  //   <h3 className="text1" style={{ color: 'white' }}><br />let’s find out how many calories you have remaining</h3>
  //   <div>
  //     <button className="option1button" onClick={handleButtonClick1}>Input calories consumed</button>
  //     {showPopUp1 && (
  //       <div className="pop-up-content1">
  //         <form onSubmit={handleSubmit1}>
  //           <input className="inputcalories" type="number" value={consumedCalorie} onChange={handleConsumedCalorieChange}></input>
  //           {/* <button  onClick={calculateRemainingCalorie}>Enter</button> */}
  //           <button className="ClosePopup">Enter</button>
  //         </form>
  //       </div>
  //     )}
  //   </div>
  // </div>