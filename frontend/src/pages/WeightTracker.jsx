import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/WeightTracker.css";
import WeightLineChart from "../components/LineChart";
import axios from "axios";


function WeightTracker() {
  const [weights, setWeights] = useState([]);
  const [weightInput, setWeightInput] = useState("");
  const [message, setMessage] = useState('');
  const userID = 1; // change to USER ID in database

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date().toISOString().slice(0, 10); // Get today's date 
    const newWeight = { userID, date, weight: weightInput };
    try {
      await axios.post(`/weight`, newWeight);
      fetchData(userID); // Fetches updated weights after new weight is added
      setWeightInput(""); // Reset weight input
    } catch (error) {
      console.error("Error adding weight: ", error);
    }
  };

  const fetchData = async (userID) => {
    try {
      const result = await axios.get(`/weights/${userID}`); //Gets weights filtered by userID provided above
      setWeights(result.data);
    } catch (error) {
      console.error("Error fetching weights: ", error); //Shows error message in console if weights cannot be fetched.
    }
  };

  const handleDeleteAllWeights = async () => {
    try {
      await axios.delete('/weights');  //deletes all Weights from database 
      setMessage('Successfully deleted all weights.');
    } catch (error) {
      console.error('Error deleting weights:', error); // Error written underneath Delete button on frontend 
      setMessage('Failed to delete all weights.');
    }
  };


  useEffect(() => {
    fetchData(userID);
  }, [userID]);

  return (
    <>
      <Navbar />
      <div className="outercontainer">
        <div className="containercontent">
          <div className="containertext">
            <h1 className="maintextcontainer">Weight Tracker</h1>
            <h2 className="subheaderx">
              Welcome to our <span>Weight Tracker</span>!
            </h2>
            <p1 className="subtextx">
            Welcome to our weight tracker. We believe that tracking weight is essential for maintaining a healthy lifestyle. Our user-friendly platform allows you to easily monitor your weight, visualize progress, and set goals. Tracking weight not only helps with weight loss, but it can also serve as an early indicator of potential health conditions. Start tracking your weight today and take control of your health and well-being.
            </p1>
             <form className = "formstyling" onSubmit={handleSubmit}> {/* when button is clicked axios call "handleSubmit" is carried out which posts entry from form to the database for the specified userID*/}
              <div className="textinput">
                <label htmlFor="weight-input">Enter your current weight:</label>
                <input type="number" id="weight-input" min="0" value={weightInput} onChange={(event) => setWeightInput(event.target.value)} />
                <label htmlFor="weight-input">Kg</label>
              </div>
              <div className="Buttonwrappers">
                <input className = "submitbtn" type="submit" value="Submit" />
                <button className="deletebtn" onClick={handleDeleteAllWeights}>Delete All Weights</button> {/* when button is clicked axios call "handleDeleteAllWeights" is carried out which deletes all Weights from database*/}
            <p>{message}</p>  {/*shows message based on success or failure to delete weights*/}
            </div>
            </form>
          </div>
          <div className="graph">
            <WeightLineChart weights={weights} /> {/* calling the prop "weights" and showing the LineChart written in LineChart.jsx in components*/}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default WeightTracker;