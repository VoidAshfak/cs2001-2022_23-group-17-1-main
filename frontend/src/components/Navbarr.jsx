import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import '../css/navbarr.css';

export default function Navbarr() {
  // Navigating to other pages (react-router-dom)
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  }

  const navigateToLogin = () => {
    navigate('/login');
  };

  // const navigateToHome = () => {
  //   navigate('/');
  // };

  // const navigateToLogin = () => {
  //   navigate('/login');
  // };

  // const navigateToInputParameters = () => {
  //   navigate('/input-parameters');
  // };

  // const navigateToCostEngineAnalysis = () => {
  //   navigate('/cost-engine-analysis');
  // };

  // const navigateToResults = () => {
  //   navigate('/results');
  // };

  // const navigateToTreeDiagram = () => {
  //   navigate('/tree-diagram');
  // };

  // const navigateToSimulations = () => {
  //   navigate('/simulations');
  // };

 // toggle mobile icon DropdownMenu change
 const setMenuBarClass = useState("MenuBar unclicked")
 const setMenuClass = useState("DropdownMenu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false)

 const updateMenu = () => {
   if(!isMenuClicked) {
     setMenuBarClass('MenuBar clicked')
     setMenuClass('DropdownMenu visible')
   }
   else {
     setMenuBarClass('MenuBar unclicked')
     setMenuClass('DropdownMenu hidden')
   }
 }

//  Sub Menu - Input (Nav Item)
const setMenuInputClass = useState("MenuInput unclicked")
const setSubMenu1Class = useState("SubDropdownMenu1 hidden")
const [isSubMenu1Clicked, setIsSubMenu1C1licked] = useState(false)

const updateInputMenu = () => {
  if(!isSubMenu1Clicked) {
    setMenuInputClass('MenuInput clicked')
    setSubMenu1Class('SubDropdownMenu1 visible')
  }
  else {
    setMenuBarClass('MenuBar unclicked')
    setMenuClass('DropdownMenu hidden')
  }
}

//  Sub Menu - Model (Nav Item)
const setMenuModelClass = useState("MenuModel unclicked")
const setSubMenuClass2 = useState("SubDropdownMenu2 hidden")
const [isSubMenu2Clicked, setIsSubMenu2C1licked] = useState(false)
const updateModelMenu = () => {
  if(!isSubMenu2Clicked) {
    setMenuModelClass('MenuInput clicked')
    setSubMenuClass2('SubDropdownMenu1 visible')
  }
  else {
    setMenuBarClass('MenuBar unclicked')
    setSubMenuClass2('DropdownMenu hidden')
  }
}

  return (
    <>
    <div className='Nav'>
      <div className='NavContainer'>
        {/* This is the div that contains the navbar logo */}
        <div className='NavLogo'>
            <img className='NavIcon' src='./assets/images/BW-Logo.png'/>
            <p>Unitrition</p>
        </div>

        <div className='MobileIcon' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
          {(isMenuClicked?<i className='fas fa-xmark'/>:<i className='fas fa-bars-staggered'/>)}
        </div>

        {/* This div holds all the items in the navbar menu */}

        <div className='NavMenu'>
          <div className='NavItem'>
            <div className='NavLink' onClick={() => updateInputMenu(setIsSubMenu1C1licked(!isSubMenu1Clicked))}>
              About Us
            </div>
          </div>
          <div className='NavItem'>
            <div className='NavLink'>
              Why Us
            </div>
          </div>
          <div className='NavItem' >
            <div className='NavLink' onClick={() => updateModelMenu(setIsSubMenu2C1licked(!isSubMenu2Clicked))}>
              Our Services
            </div>
          </div>
        </div>

        {/* This is the div that contains the the buttons on the navbar */}

          {/* <div className='NavBtnContainer'>
            <div className='NavBtn'>
              <button className='NavBtnLink' onclick={navigateToDashboard}>
                Signup
              </button>
            </div>
            <div className='NavBtn'>
              <button className='NavBtnLink' onClick={navigateToLogin}>
                Login
              </button>
            </div>
          </div> */}

      </div>
    </div>

    <div className={(isMenuClicked?'DropdownMenu':'DropdownMenuHidden')}>
        <div className='DropdownMenuList'>
          <div className='DropdownMenuItem' onClick={() => updateInputMenu(setIsSubMenu1C1licked(!isSubMenu1Clicked))}>
            Inputs
            {(isSubMenu1Clicked?<i className='fas fa-angle-down'/>:<i className='fas fa-angle-right'/>)}
          </div>
          <div className='DropdownMenuItem'>
            Results
          </div>
          <div className='DropdownMenuItem' onClick={() => updateModelMenu(setIsSubMenu2C1licked(!isSubMenu2Clicked))}>
            Model
            {(isSubMenu2Clicked?<i className='fas fa-angle-down'/>:<i className='fas fa-angle-right'/>)}
          </div>
          <div className='DropdownMenuItem'>
            
          </div>
        </div>
     </div>
  </>
  )
}