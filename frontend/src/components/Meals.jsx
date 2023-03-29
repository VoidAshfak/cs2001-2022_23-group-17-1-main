import React from 'react'
import "../css/meals.css"
import pancakeImg from '../images/Blueberry-Pancakes.jpeg'
import oatsImg from '../images/Baked-Oats.jpeg'
import smoothieImg from '../images/smoothie-bowl.jpeg'
import oatmealImg from '../images/oatmeal.jpeg'
import chickenImg from '../images/MongolianChicken.jpeg'
import shrimpImg from '../images/shrimp.jpeg'
import salmonImg from '../images/salmon.jpeg'
import saladImg from '../images/panzanella-salad.jpeg'

export default function Meals() {
  return (
    <>
    <div className='container'>
      <div className='pancake-card'>
      <img className='pancakeImg' src= {pancakeImg} alt=''/>
      <h2 className='pancake-heading'>Blueberry Pancakes</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>200g self raising flour</li>
        <li>1 tsp baking powder</li>
        <li>1 egg</li>
        <li>300ml milk</li>
        <li>knob butter</li>
        <li>150g pack blueberry</li>
        <li>sunflower oil</li>
        <li>golden or maple syrup</li>
        </ul>
        <h4>Calories: 108kcal (per serving)</h4>
      </div>
      <div className='oats-card'>
      <img className='oatsImg' src= {oatsImg} alt=''/>
      <h2 className='oats-heading'>Baked Oats</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>100g porridge oats</li>
        <li>1 tsp baking powder</li>
        <li>1 banana</li>
        <li>1 tbsp maple syrup / honey</li>
        <li>2 eggs</li>
        <li>pinch of ground cinnamon</li>
        <li>100g chocolate chips</li>
        </ul>
        <h4>Calories: 300kcal (per serving)</h4>
      </div>
      <div className='smoothie-card'>
      <img className='smoothieImg' src= {smoothieImg} alt=''/>
      <h2 className='smoothie-heading'>Smoothie Bowl</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>frozen banana</li>
        <li>frozen strawberries</li>
        <li>milk of choice</li>
        <li>toppings of choice: chia seeds, honey, strawberries, nuts</li>
        </ul>
        <h4>Calories: 160kcal (per serving)</h4>
      </div>
      <div className='oatmeal-card'>
      <img className='oatmealImg' src= {oatmealImg} alt=''/>
      <h2 className='oatmeal-heading'>Oatmeal</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>3/4 cups water</li>
        <li>1/8 tsp salt</li>
        <li>1 cup oats</li>
        <li>2 tbsp peanut butter</li>
        <li>2 tbsp honey</li>
        <li>2 tsp flaxseed</li>
        <li>1/2 tsp cinnamon</li>
        </ul>
        <h4>Calories: 323kcal (per serving)</h4>
      </div>
      <div className='chicken-card'>
      <img className='chickenImg' src= {chickenImg} alt=''/>
      <h2 className='chicken-heading'>Mongolian Chicken</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>1.5 lb boneless chicken</li>
        <li>1/4 cup cornstarch</li>
        <li>2 tbsp olive oil</li>
        <li>1 tsp sesame seeds</li>
        <li>1/4 cup honey</li>
        <li>2-3 garlic cloves</li>
        <li>1/4 tsp red pepper flakes</li>
        <li>1 tbsp rice vinegar</li>
        </ul>
        <h4>Calories: 395kcal (per serving)</h4>
      </div>
      <div className='shrimp-card'>
      <img className='shrimpImg' src= {shrimpImg} alt=''/>
      <h2 className='shrimp-heading'>Shrimp</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>1lb shrimp</li>
        <li>2 medium to large zucchini</li>
        <li>2 tbsp minced garlic</li>
        <li>1/2 tbsp lemon</li>
        <li>olive oil</li>
        <li>salt & pepper</li>
        </ul>
        <h4>Calories: 216kcal (per serving)</h4>
      </div>
      <div className='salmon-card'>
      <img className='salmonImg' src= {salmonImg} alt=''/>
      <h2 className='salmon-heading'>Mediterranean Salmon</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>3 tbsp olive oil</li>
        <li>2 salmon fillets</li>
        <li>1 tsp dried oregano</li>
        <li>1 tsp salt</li>
        <li>cracked pepper to taste</li>
        <li>lettuce leaves</li>
        <li>1 cucumber diced</li>
        <li>1 red onion sliced</li>
        <li>cherry tomatoes</li>
        </ul>
        <h4>Calories: 411kcal (per serving)</h4>
      </div>
      <div className='salad-card'>
      <img className='saladImg' src= {saladImg} alt=''/>
      <h2 className='salad-heading'>Panzanella Salad</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>1kg mixed tomatoes</li>
        <li>300g day-old sourdough, torn into large chunks</li>
        <li>100ml extra virgin olive oil</li>
        <li>1 small shallot, chopped</li>
        <li>50g tin anchovies, chopped</li>
        <li>100g black olives</li>
        <li>handful of basil leaves</li>
        </ul>
        <h4>Calories: 378kcal (per serving)</h4>
      </div>

    </div>
    </>
  )
}