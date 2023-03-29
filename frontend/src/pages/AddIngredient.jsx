import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/addingredient.css';
import axios from 'axios';

function AddIngredient() {

return (
        <>
          <Navbar/>
          <div className="AddIngredBorder"> </div>

            <h1 className="AddIngredTitle">Add your own Ingredients</h1>

            <h2 className="AddIngredName">Ingredient Name:</h2>

            <div className="AddIngredNameInput"> </div>

            <h2 className="AddIngredCategory">Category:</h2>

            <div className="AddIngredCategoryInput"> </div>

            <h2 className="AddIngredCalories">Calories:</h2>

            <div className="AddIngredCaloriesInput"> </div>

            <h2 className="AddIngredServing">Serving Size:</h2>

            <div className="AddIngredServingInput"> </div>

            <h2 className="AddIngredSugar">Sugar:</h2>

            <div className="AddIngredSugarInput"> </div>

            <h2 className="AddIngredFat">Fat:</h2>

            <div className="AddIngredFatInput"> </div>

            <div className="SaveIngredButton"> </div>

            <h2 className="SaveIngredText">Save Ingredient </h2>


        </>
    );
}
export default AddIngredient;