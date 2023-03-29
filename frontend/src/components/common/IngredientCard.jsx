
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/ingredientCard.css";

function IngredientCard(props) {

  // Had to dynamically implement the images as there was issues in
  // src = {props.urlImage} despite console logging the right thing
  // image wasn't found
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const imageImports = [];
    // loop through the numbers from 1 to 30
    for (let i = 1; i <= 30; i++) {
      // import the image dynamically
      const imageImport = import(`../../images/ingredients/${i}.jpg`)
        .then(module => module.default)
        .catch(() => null);
      
      // add the imported image to the array
      imageImports.push(imageImport);
    }
    // use Promise.all() to wait for all the imports to complete
    Promise.all(imageImports).then(images => {
      // images is an array of all the imported images, in order
      setIngredients(images);
    });
  }, []);


  return (
    <>
      <li className='ingredients__item'>
        <Link className='ingredients__item__link' to= {`/mealplanner/ingredients/${props.id}`}>
          <figure className='ingredients__item__pic-wrap' data-category= {props.calo}>
            <img
              className='ingredients__item__img'
              alt="ingredient image"
              src={ingredients[props.id - 1] }
            />
          </figure>
          <div className='ingredients__item__info'>
            <h5 className='ingredients__item__text'>{props.name}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default IngredientCard;