import React from 'react'
import '../css/recipe.css'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import { recipes } from '../data/recipedata.jsx';
import ListRecipe from '../components/ListRecipe';
import Footerr from '../components/Footerr';

function Recipe() {
    const [searchTerm, setSearchTerm] = useState("");
    const [tempList, setTempList] = useState(recipes);
    const [vegan, setVegan] = useState(false);
    const [lowcarb, setLowcarb] = useState(false);
    const [lowfat, setLowfat] = useState(false);
    const [HCG, setHCG] = useState(false);
    const [fillter, setfillter] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
      setTempList(
        recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
      if (searchTerm.length == 0) setTempList(recipes);
    }, [searchTerm]);
  
    useEffect(() => {
      if (searchTerm.length == 0) {
        var listFillter = [];
        if (vegan === true) {
          listFillter.push("Vegan");
        }
        if (lowcarb === true) {
          listFillter.push("Low-Carb");
        }
        if (lowfat === true) {
          listFillter.push("Low-Fat");
        }
        if (HCG === true) {
          listFillter.push("HCG");
        }
        console.log(listFillter);
        setTempList(recipes);
        if (listFillter.length > 0) {
          var temRecipe = [];
          for (var j = 0; j < recipes.length; j++) {
            var count = 0;
            for (var i = 0; i < listFillter.length; i++) {
              var check = false;
              for (var k = 0; k < recipes[j].list_cate.length; k++) {
                if (listFillter[i] === recipes[j].list_cate[k]) check = true;
              }
              if (check === true) {
                count++;
              }
            }
            if (count === listFillter.length) {
              temRecipe.push(recipes[j]);
            }
          }
          setTempList(temRecipe);
          console.log("temprecipe", temRecipe);
          console.log("templist", tempList);
        }
      } else {
        var listFillter = [];
        console.log(searchTerm);
        var listSearch = recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        console.log("temlistnow", listSearch);
        if (vegan === true) {
          listFillter.push("Vegan");
        }
        if (lowcarb === true) {
          listFillter.push("Low-Carb");
        }
        if (lowfat === true) {
          listFillter.push("Low-Fat");
        }
        if (HCG === true) {
          listFillter.push("HCG");
        }
        console.log(listFillter);
        var temRecipe = [];
        for (var j = 0; j < listSearch.length; j++) {
          var count = 0;
          for (var i = 0; i < listFillter.length; i++) {
            var check = false;
            for (var k = 0; k < listSearch[j].list_cate.length; k++) {
              if (listFillter[i] === listSearch[j].list_cate[k]) check = true;
            }
            if (check === true) {
              count++;
            }
          }
          if (count === listFillter.length) {
            temRecipe.push(listSearch[j]);
          }
        }
        setTempList(temRecipe);
        console.log("temprecipe", temRecipe);
        console.log("templist", tempList);
      }
    }, [fillter]);
  
  return (
    <>
    <Navbar/>

    <div className='RecipesContainer'>
      <h1 className='RecipesHeading'>
        What
        <span> recipe </span>
        you want to
        <span> explore?</span>
      </h1>
      <div className='RecipesSearchBarWrapper'>
        <div className='RecipesSearchBar'>
        <input
            type="text"
            className="input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='RecipesFilterContainer'>
        <button className={`FilterBtn${vegan ? "Active" : ""}`} onClick={() => {
            setVegan(!vegan);
            setfillter(!fillter);
        }}
        >
            Vegan
        </button>

        <button className={`FilterBtn${lowcarb ? "Active" : ""}`} onClick={() => {
            setLowcarb(!lowcarb);
            setfillter(!fillter);
        }}
        >
            Low Carb
        </button>

        <button className={`FilterBtn${lowfat ? "Active" : ""}`} onClick={() => {
            setLowfat(!lowfat);
            setfillter(!fillter);
        }}
        >
            Low Fat
        </button>

        <button className={`FilterBtn${HCG ? "Active" : ""}`} onClick={() => {
            setHCG(!HCG);
            setfillter(!fillter);
        }}
        >
            HCG
        </button>
      </div>

      <ListRecipe recipes={tempList} />
      
    </div>

    <Footerr />


    </>
  )
}

export default Recipe
