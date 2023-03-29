import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import '../css/navbar.css';

export default function Navbar() {

  // to change burger classes
  const setBurgerClass = useState("BurgerBar unclicked")
  const setMenuClass = useState("DropdownMenu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // to navigate using navbar

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const navigateToCalorieCalculator = () => {
    navigate('/caloriecalculator');
  };

  const navigateToWeightTracker = () => {
    navigate('/weighttracker');
  };

  const navigateToExplore = () => {
    navigate('/mealplanner/explore');
  }

  const navigateToIngredients = () => {
    navigate('/mealplanner/ingredients');
  }

  const navigateToRecipes = () => {
    navigate('/mealplanner/recipes');
  };

  const navigateToMealSuggestion = () => {
    navigate('/mealplanner/mealsuggestion');
  }

 // toggle burger DropdownMenu change
 const updateMenu = () => {
   if(!isSubMenuClicked) {
     setBurgerClass('BurgerBar clicked')
     setMenuClass('DropdownMenu visible')
   }
   else {
     setBurgerClass('BurgerBar unclicked')
     setMenuClass('DropdownMenu hidden')
   }
  }

const setSubMenuMealplannerClass = useState("Menu unclicked")
const setSubMenuClass = useState("SubDropdownMenu hidden")
const [isSubMenuClicked, setIsSubMenuClicked] = useState(false)

const updateMealplannerMenu = () => {
  if(!isSubMenuClicked) {
    setSubMenuClass('Menu clicked')
    setSubMenuMealplannerClass('SubDropdownMenu visible')
  }
  else {
    setSubMenuClass('Menu unclicked')
    setSubMenuMealplannerClass('DropdownMenu hidden')
  }
}

  return (
    <>
      <div className='Nav'>
        <div className='NavContainer'>
          </div>
          <div className='Logo' >
            <div className='LogoWrapper'>
              <img className='Img1' 
              src='../assets/Images/BW-Logo.png' 
              // src='../images/BW-Logo.png'
              alt='' onClick={navigateToDashboard}/>
            </div>
          </div>
            <div className='MobileIcon1' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
              {(isMenuClicked?
              <i className='fas fa-xmark'/>
              // <RiCloseLine/>
              :<i className='fas fa-bars-staggered'/>
              // <HiMenuAlt4/>
              )}
            </div>
        </div>
        <div className={(isMenuClicked?'DropdownMenu1':'DropdownMenuHidden1')}>
          <div className='DropdownMenuList1'>
            <div className='DropdownMenuItem' onClick={navigateToDashboard}>
              Home
            </div>
            <div className='DropdownMenuItem' onClick={navigateToWeightTracker}>
              Weight Tracker
            </div>
            <div className='DropdownMenuItem' onClick={navigateToCalorieCalculator}>
              Calorie Calculator
            </div>
            <div className='DropdownMenuItem' 
            // onClick={navigateToMealPlanner}
            onClick={() => updateMealplannerMenu(setIsSubMenuClicked(!isSubMenuClicked))}
            >
              Meal Planner
              {(isSubMenuClicked?<i className='fas fa-angle-down'/>:<i className='fas fa-angle-right'/>)}
            </div>
          </div>

          <div className={(isSubMenuClicked?'SubDropdownMenu':'SubDropdownMenuHidden')}>
            <div className='SubDropdownMenuList'>
              <div className='SubDropdownMenuItem' onClick={navigateToExplore}>
                Explore
              </div>
              <div className='SubDropdownMenuItem' onClick={navigateToIngredients}>
                Ingredients
              </div>
              <div className='SubDropdownMenuItem' onClick={navigateToRecipes}>
                Recipes
              </div>
              <div className='SubDropdownMenuItem' onClick={navigateToMealSuggestion}>
                Meal suggestions
              </div>
            </div>
          </div>

          <div className='NavBtn1'>
                <button className='NavBtnLink1' onClick={navigateToHome} >
                  Logout
                </button>
              </div>
        </div>
      </>
  )
}