import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/recipecard.css'

function RecipeCard(props) {
  return (
    <li className='RecipeCard'>
      <Link className='RecipeCardLink' to={`/mealplanner/recipes/${props.id}`}>
        <figure className='RecipesCardPicWrapper' data-category={props.calo}>
            <img
                className='RecipesCardImg'
                alt='Recipe Image'
                src={props.urlImage}
            />
        </figure>
        <div className='RecipesCardInfo'>
            <h5 className='RecipeCardText'>{props.name}</h5>
        </div>
      </Link>
    </li>
  )
}

export default RecipeCard
