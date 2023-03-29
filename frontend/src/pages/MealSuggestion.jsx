import React, { useState, useEffect } from "react";
import { ingredients } from "../data/ingredients_data";
import { recipes } from "../data/recipedata";
// import { temp } from "../data/ingredients_data.js";
import { Link } from "react-router-dom";
import "../css/ingredientCard2.css"
import "../css/listingredient2.css";
import { Button } from "../components/common/Button";
import ListRecipe from "../components/ListRecipe";
import "../css/mealsuggestion.css";
// import cook1_img from "../images/cook-choose-ingredient.png";
import cook2_img from "../images/cook-suggest.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Footerr from "../components/Footerr";

function MealSuggestion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempList, setTempList] = useState(ingredients);
  const [tempList2, setTempList2] = useState([]);
  const [tempChooseList, setTempChooseList] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setTempList(
      ingredients.filter((ingredient) => {
        return (
          ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !tempChooseList.includes(ingredient)
        );
      })
    );
  }, [searchTerm]);

  useEffect(() => {
    if (tempList.length > 4) {
      setTempList2([tempList[0], tempList[1], tempList[2], tempList[3]]);
    } else {
      setTempList2(tempList);
    }
    if (tempList2.length == 0) setSuggestList([]);
  }, [tempList]);

  function handleSearch(list) {
    setIsSearch(true);
    var temp = [];
    if (list.length > 0) {
      for (var j = 0; j < recipes.length; j++) {
        var count = 0;
        for (var i = 0; i < list.length; i++) {
          var check = false;
          for (var k = 0; k < recipes[j].recipes.length; k++) {
            if (list[i].name === recipes[j].recipes[k].name) check = true;
          }
          if (check === true) {
            count++;
          }
        }
        if (count === list.length) {
          temp.push(recipes[j]);
        }
      }
    } else {
      temp = [];
    }
    if (temp.length > 0) {
      setSuggestList(temp);
    } else setSuggestList([]);
  }
  return (
   <>
   <Navbar/>

   <div className="page">
      <div className="view-top">
        <div className="view-side1">
          <div className="search_wrap">
            <div className="search_box search-cook">
               <input
                type="text"
                className="input input-search"
                placeholder="Seach ingredients"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              {searchTerm.length > 0 ? (
                <div
                  onClick={() => {
                    setSearchTerm("");
                  }}
                  className="button-cook"
                >
                  <p>Clear</p>
                </div>
              ) : null}
            </div>
          </div>

           <div className="search-view">
            <div className="ingredients">
              <div className="ingredients__container">
                <div className="ingredients__wrapper">
                  {searchTerm.length > 0 && tempList2.length == 0 ? (
                    <div className="not-found">
                      <h1>No ingredient can found</h1>
                    </div>
                  ) : (
                    <ul className="ingredients__items">


                      {tempList2.map((ingredient) => (
                        <li className="ingredients2__item">


                          <div className="ingredients2__item__link">
                            <figure
                              className="ingredients2__item__pic-wrap"
                              data-category={`${ingredient.calo} Kcal`}
                              onClick={() => {
                                setTempChooseList([
                                  ...tempChooseList,
                                  ingredient,
                                ]);
                                setTempList(
                                  tempList.filter((x) => {
                                    return x.id !== ingredient.id;
                                  })
                                );
                              }}
                            >
                              <img
                                className="ingredients2__item__img"
                                alt="Ingredient Image"
                                src={ingredient.urlImage}
                              />
                            </figure>
                            <div className="ingredients2__item__info">
                              <h5 className="ingredients2__item__text">
                                {ingredient.name}
                              </h5>
                            </div>
                          </div>


                        </li>
                      ))}



                    </ul>
                  )}
                </div>
              </div> 
              
            </div>
          </div>
        </div>

        <div className="view-side2">
          <div>
          <h1 className="heading3" data-aos="fade-up">
            <span>Your ingredient</span> here:
          </h1>
          </div>

          <div className="ingredients">
            <div className="ingredients__container">
              <div className="ingredients__wrapper">
                {tempChooseList.length == 0 ? (
                  <div>
                  </div>
                ) : (
                  <ul className="ingredients__items">
                    {tempChooseList.map((ingredient) => (
                      <li className="ingredients2__item">
                        <div className="ingredients2__item__link">
                          <figure
                            className="ingredients2__item__pic-wrap"
                            data-category={`${ingredient.calo} Kcal`}
                            onClick={() => {
                              setTempList([...tempList, ingredient]);
                              setTempChooseList(
                                tempChooseList.filter((x) => {
                                  return x.id !== ingredient.id;
                                })
                              );
                            }}
                          >
                            <img
                              className="ingredients2__item__img"
                              alt="Ingredient Image"
                              src={ingredient.urlImage}
                            />
                          </figure>
                          <div className="ingredients2__item__info">
                            <h5 className="ingredients2__item__text">
                              {ingredient.name}
                            </h5>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div> 
          </div>
        </div>
      </div> 

      <div className="cook-view">
        <div className="cook-btn" onClick={() => handleSearch(tempChooseList)}>
          <div className="icon-cook">
            <i class="fas fa-utensils"/>
          </div>
          <div className="cook-text">Suggest for you</div>
        </div>
        <div className="list-recipe">
          {isSearch === false ? (
            <div className="image-field">
              <img className="cook-img2" src={cook2_img} alt="cook-image" />
            </div>
          ) : (
            <div>
              {suggestList.length === 0 ? (
                <div className="not-found">
                  <h1>No recipe can found :( </h1>
                </div>
              ) : (
                <ListRecipe recipes={suggestList} />
             
              )}
            </div>
          )}
        </div>
      </div>
    </div>

   <Footerr/>
   </>
  );
}
export default MealSuggestion;
