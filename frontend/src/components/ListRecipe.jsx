import React, { Component } from "react";
import RecipeCard from "../components/common/RecipeCard";
import "../css/listrecipe.css";
function ListRecipe(props) {

  return (
    <div className="recipes">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <h2>{props.query}</h2>
      <div className="recipes__container">
        <div className="recipes__wrapper">
          <ul className="recipes__items">
            {
              props.recipes.map(
                (recipe) => (
                  // (recipe.id > 0)?
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    // path={`/recipe/${recipe.id}`}
                    urlImage={recipe.urlImage}
                    calo={`${recipe.calo} Kcal`}
                    name={recipe.name}
                    recipe={recipe}
                  />
                )
                // : null
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListRecipe;


// import React, { Component } from 'react'
// import RecipeCard from '../components/common/RecipeCard'
// import '../css/listrecipe.css'

// function ListRecipe(props) {
//   return (
//     <div className='ListRecipesContainer'>
//       <h2>{props.query}</h2>
        
//         <div className='ListRecipesWrapper'>
//             <ul className='RecipeCards'>
//                 {
//                     props.recopes.map(
//                         (recipe) => (
//                             <RecipeCard
//                             key={recipe.id}
//                             id={recipe.id}
//                             urlImage={recipe.urlImage}
//                             calo={`${recipe.calo} Kcal`}
//                             name={recipe.name}
//                             recipe={recipe}
//                             />
//                         )
//                     )
//                 }
//             </ul>
//         </div>

//     </div>
//   )
// }

// export default ListRecipe
