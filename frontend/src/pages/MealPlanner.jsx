import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import '../css/MealPlanner.css'

import LineChartData from '../data/linechartdata.json'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function MealPlanner() {
  
  const navigate = useNavigate();

  const navigateToMealSuggestion = () => {
    navigate('/mealplanner/mealsuggestion');
  };

  const navigateToRecipe = () => {
    navigate('/mealplanner/recipes');
  };

  const navigateToIngredient = () => {
    navigate('/mealplanner/ingredients');
  };

  const navigateToExplore = () => {
    navigate('/mealplanner/explore');
  };
  
  return (
    <>
      <Navbar/>
      <div className="MealPlannerContainer"> </div>

       <div className="ButtonPlanMeal" onClick={navigateToMealSuggestion}>
        <strong>Plan a Healthy Meal</strong> </div>

        <div className="ButtonTakeaway" onClick={navigateToRecipe}>
          <strong>Explore Recipes</strong> </div>

        <div className="ButtonIngredients" onClick={navigateToIngredient}>
          <strong>Explore Ingredients</strong> </div>
        
          <div className="ButtonExplore" onClick={navigateToExplore}>
          <strong>Explore Food</strong> </div>
        
          <h1 className="MealPlannerTitle">Meal Planner</h1>

          <h2 className="MealPlannerSubtitle">Choose your type of meal</h2> 
    </>
  );
}
export default MealPlanner;
