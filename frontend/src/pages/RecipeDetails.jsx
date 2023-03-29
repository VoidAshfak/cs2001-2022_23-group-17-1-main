import React, { useState, useEffect } from "react";
import { recipes } from '../data/recipedata';
import ListRecipe from '../components/ListRecipe'
import '../css/recipedetails.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footerr from "../components/Footerr";

const RecipeDetails = () => {
  const {recipeId} = useParams();
  
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  // const {name, UrlImage} = recipe;

  console.log(recipe);

  // const {name, urlImage, recipes, list_cate, 
  //   countIngre, favo, favo_state, servings, 
  //   time, instructions, calo, Total_fat, Saturated_Fat,
  //   Cholesterol, Sodium, Total_Carbohydrate, Dietary_Fiber,
  //   Total_Sugars, Protein, Vitamin_D, Calcium, Iron,
  //   Potassium} = recipe;
  

  return (
        <>
        <Navbar />
        <div>
          <div className="page">
          <div className="container">
            <div className="row-1">
              <div className="col-1a">
                <li className="recipes__item2">
                  <div className="recipes__item__link2">
                    <figure className="recipes__item__pic-wrap2">
                      <img
                        className="recipes__item__img2"
                        alt="Recipe Image"
                        src={recipes[recipeId-1].urlImage}
                      />
                    </figure>
                    <h1 className="recipes__item__info2">{recipes[recipeId-1].name}</h1>
                  </div>
                </li>
              </div>
              <div class="col-1b nutri-table">
                <table class="nutri-fact">
                  <thead class="table-header">
                    <tr>
                      <th className="name-table">Nutrition per: 100g</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Fat</td>
                      <td>0.3g</td>
                    </tr>
                    <tr>
                      <td>Cholesterol</td>
                      <td>0g</td>
                    </tr>
                    <tr>
                      <td>Sodium</td>
                      <td>6.2mg</td>
                    </tr>
                    <tr>
                      <td>Potassium</td>
                      <td>292mg</td>
                    </tr>
                    <tr>
                      <td>Total Carbohydrate</td>
                      <td>4.8g</td>
                    </tr>
                    <tr>
                      <td>Protein</td>
                      <td>1.1g</td>
                    </tr>
                    <tr>
                      <td>Vitamin A</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Vitamin C</td>
                      <td>0.9%</td>
                    </tr>
                    <tr>
                      <td>Vitamin D</td>
                      <td>0.5%</td>
                    </tr>
                    <tr>
                      <td>Calcium</td>
                      <td>0.9%</td>
                    </tr>
                    <tr>
                      <td>Iron</td>
                      <td>1.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row-2">
            <div className="col-2a">
            <div className="list-ingredient">
                <h1 className="section-heading">Ingredients for {`${recipes[recipeId-1].servings}`} servings </h1>
                  <ul className="ingres">
                    {recipes[recipeId-1].recipes.map((beni) => (
                      <div className="ingre">
                        <div className="name-ingre">{`${beni.name} `}</div>
                        <div className="ingre-count">
                          {`${beni.name.length/2}`}
                        </div>
                      </div>
                    ))}
                  </ul>
                  </div>
            </div>
              <div className="col-2b">
                <h1 className="section-heading">Instructions</h1>
                <ul className="health-beni">
                  {recipes[recipeId-1].instructions.map((beni) => (
                    <div>
                      <li className="beni">{beni}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footerr/>
        </>
  )
}


export default RecipeDetails;