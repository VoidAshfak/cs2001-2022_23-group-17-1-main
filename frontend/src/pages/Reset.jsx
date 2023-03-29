import React from 'react'
import Navbar from '../components/Navbar';
import "../css/navbar.css";
import { useNavigate } from 'react-router-dom';
import "../css/loginpage.css";
import "../css/navbar.css";
import "../css/heroo.css";
import "../css/loginmodal.css";

function Reset() {
 
 
  
  const navigate = useNavigate();


  const navigateToLoginPage = () => {
    navigate("/loginpage");
  };


  return (
    <>
      <Navbar />

      <div className="gap"></div>
      <div className="containerSet">

      <form>
          <h1>Unitrion</h1>
          <br />
          <label>
            Enter Username:
            
            <input
              type="text"

            />

          </label>

          <label>
            Enter New Password:
            <input
              type="password"
            />
          </label>
          

          <button onClick={navigateToLoginPage}>

             Submit
          </button>
        </form>
        </div>
    </>
    
  )
}




    export default Reset;
  
    
