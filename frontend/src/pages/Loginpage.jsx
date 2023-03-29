import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "../css/heroo.css";
import "../css/loginmodal.css";
import "../css/navbar.css";
import "../css/loginpage.css";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [regStatus, setRegStatus] = useState("");
  const navigate = useNavigate();
  const [validorInvalid, setvalidorInvalid] = useState(false);
  const [registerFormData, setRegisterFormData] = useState({
    userID: "",
    username: "",
    userpassword: "",
    user_role: "",
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    bio: "",
  });

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const navigateToReset= () => {
    navigate("/reset");
  };
  const handleRegisterFormChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (!registerFormData.username || !registerFormData.userpassword) {
      console.log("Error: username or password field is empty");
      return;
    }
    axios
      .post("http://localhost:8080/register", registerFormData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setRegStatus("You have been registered");
          navigate("/dashboard");
        } else {
          setRegStatus("Could not register");
        }
      })
      .catch((error) => {
        console.log("Error has occured");
        console.log(error);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !userpassword) {
      console.log("Error: username or password field is empty");
      return;
    }
    axios
      .get("http://localhost:8080/users", {
        params: {
          username: username,
          userpassword: userpassword,
        },
      })
      .then((response) => {
        console.log("response", response);
        console.log("response.data", response.data);
        if (response.data) {
          setLoginStatus("Login successful");
          navigate("/dashboard");
        } else {
          setLoginStatus("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log("Error has occured");
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="gap"></div>
      <div className="containerlogin">
        <form>
          <h2>Login</h2>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={userpassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>      

          <button onClick={navigateToReset}>
             Forgot Password
          </button>

          {loginStatus && <p>{loginStatus}</p>}
        </form>
        <form className="regform" onSubmit={handleRegisterSubmit}>
          <div>
            <h2>Not a user? Register</h2>
            <br />

            <label>
              User ID:
              <input
                type="text"
                name="userID"
                value={registerFormData.userID}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              First Name:
              <input
                type="text"
                name="first_name"
                value={registerFormData.first_name}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="last_name"
                value={registerFormData.last_name}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={registerFormData.username}
                onChange={handleRegisterFormChange}
              />
            </label>
          </div>
          <div className="reg2">
            <br />
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email_address"
                value={registerFormData.email_address}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="userpassword"
                value={registerFormData.userpassword}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone_number"
                value={registerFormData.phone_number}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Bio:
              <input
                type="text"
                name="bio"
                value={registerFormData.bio}
                onChange={handleRegisterFormChange}
              />
            </label>
            <label>
              Your goal:
              <input
                type="text"
                name="user_role"
                value={registerFormData.user_role}
                onChange={handleRegisterFormChange}
              />
            </label>
            <button type="submit">Register</button>
            {regStatus && <p>{regStatus}</p>}
            {/* {validorInvalid && { navigateToDashboard }} */}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Loginpage;
