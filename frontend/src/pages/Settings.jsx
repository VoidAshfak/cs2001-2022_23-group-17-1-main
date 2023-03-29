import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/usersettings.css';
import axios from 'axios';

function Settings() {
  const [userData, setUserData] = useState({});
  const userID = 1;

  useEffect(() => {
    // Fetch user data from API and update state
    axios
      .get(`/users/${userID}`) //  API endpoint "/users/:id"
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    // Update user data state when form inputs change
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Send updated user data to API to be saved in database
    axios
      .put(`/users/${userData.userID}`, userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <Navbar />

      <div className="settings-container">
        <div className="profile-picture">
          <img src="../assets/Images/No_Picture.png" alt="Profile Picture" />
        </div>

        <h1 className="account-details-title">Account Details</h1>

        <form className="form-container">
          <div className="form-group">
            <label htmlFor="first-name-input" className="form-label">
              First Name
            </label>
            <input
              id="first-name-input"
              type="text"
              className="form-control"
              placeholder={userData.first_name || 'Enter your first name...'}
              name="first_name"
              onChange={handleChange}
            />

          </div>

          <div className="form-group">
            <label htmlFor="last-name-input" className="form-label">
              Last Name
            </label>
            <input
              id="last-name-input"
              type="text"
              className="form-control"
              placeholder={userData.last_name || 'Enter your last name...'}
              name="last_name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email-input" className="form-label">
              Email Address
            </label>
            <input
              id="email-input"
              type="text"
              className="form-control"
              placeholder={userData.email_address || 'Enter your email address...'}
              name="email_address"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone-number-input" className="form-label">
              Phone Number
            </label>
            <input
              id="phone-input"
              type="text"
              className="form-control"
              placeholder={userData.phone_number || 'Enter your phone number...'}
              name="phone_number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio-input" className="form-label">
              Bio
            </label>
            <textarea
              id="phone-input"
              type="text"
              className="form-control"
              placeholder={userData.bio || 'Tell us a bit about yourself...'}
              name="phone_number"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className=" submit-form-button" onClick={handleSubmit}>
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default Settings;

