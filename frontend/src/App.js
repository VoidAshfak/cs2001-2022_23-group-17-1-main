import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WeightTracker from "./pages/WeightTracker";
import CalorieCalculator from "./pages/CalorieCalculator";
import CalorieTracker from "./pages/CalorieTracker";

import MealPlanner from "./pages/MealPlanner";
import Settings from "./pages/Settings";
import Recipe from "./pages/Recipe";
import Ingredient from "./pages/Ingredient";
import IngredientDetails from "./pages/IngredientDetails";
import RecipeDetails from "./pages/RecipeDetails";
import Explore from "./pages/Explore";
import MealSuggestion from "./pages/MealSuggestion";
import Loginpage from "./pages/Loginpage";
import AddIngredient from "./pages/AddIngredient";
import Reset from "./pages/Reset";

// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weighttracker" element={<WeightTracker />} />
        <Route path="/caloriecalculator" element={<CalorieCalculator />} />
          <Route path="/calorietracker" element={<CalorieTracker />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/reset" element={<Reset />} />



        <Route path="/mealplanner" element={<MealPlanner />} />
        <Route path="/mealplanner/recipes" element={<Recipe />} />
        <Route
          path="mealplanner/recipes/:recipeId"
          element={<RecipeDetails />}
        />
        <Route
          path="/mealplanner/ingredients/:ingredientId"
          element={<IngredientDetails />}
        />

      

        
        

        <Route path="/mealplanner/ingredients" element={<Ingredient />} />
        <Route path="mealplanner/explore" element={<Explore />} />
        <Route path="mealplanner/mealsuggestion" element={<MealSuggestion />} />
        <Route path="/profile" element={<Settings />} />
        <Route path="/mealplanner/ingredients/addIngredient" element={<AddIngredient />} />
      </Routes>
    </Router>
  );
}

export default App;
