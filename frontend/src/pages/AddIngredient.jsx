import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../css/addingredient.css';
import axios from 'axios';

function AddIngredient() {

  const [ingredient, setIngredient] = useState({
    name: '',
    category: '',
    servingSize: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIngredient((prevIngredient) => ({
      ...prevIngredient,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can do something with the ingredient data here, like saving it to a database.
    console.log(ingredient);
    // Reset the form fields
    setIngredient({
      name: '',
      category: '',
      servingSize: '',
    });
  };

  return (
    <>
      <Navbar />

      <div className='main_container'>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
          <div className='split'><div className="form-group">
            <label htmlFor="name">Ingredient Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={ingredient.name}
              onChange={handleInputChange}
            />
          </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={ingredient.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="servingSize">Serving Size:</label>
              <input
                type="text"
                id="servingSize"
                name="servingSize"
                value={ingredient.servingSize}
                onChange={handleInputChange}
              />
            </div> </div>
          <div className='split2'><div className="form-group">
            <label htmlFor="calories">Calories:</label>
            <input
              type="text"
              id="calories"
              name="calories"
              value={ingredient.calories}
              onChange={handleInputChange}
            />
          </div>
            <div className="form-group">
              <label htmlFor="sugar">Sugar:</label>
              <input
                type="text"
                id="sugar"
                name="sugar"
                value={ingredient.sugar}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fat">Fat:</label>
              <input
                type="text"
                id="fat"
                name="fat"
                value={ingredient.fat}
                onChange={handleInputChange}
              />
            </div> </div>
          <button type="submit" className="save-button">Save Ingredient</button>
        </form>


      </div>
    </>
  );
}
export default AddIngredient;