import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footerr from '../components/Footerr'
import "../css/ingredientdetails.css";

function IngredientDetails(props) {
  const [healthBenefits, setHealthBenefits] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientImg, setIngredientImg] = useState(null);
  const [calo, setCalo] = useState(null);
  const [fat, setFat] = useState(null);
  const [sodium, setSodium] = useState(null);
  const [carbo, setCarbo] = useState(null);
  const { ingredientId } = useParams();

  useEffect(() => {
    const fetchIngredientDetails = async () => {
      try {
        const response = await fetch(`/ingredients/${ingredientId}`);
        const data = await response.json();
        setCalo(data.calo);
        setFat(data.fat);
        setSodium(data.sodium);
        setCarbo(data.carbo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIngredientDetails();
  }, [ingredientId]);

  useEffect(() => {
    const fetchHealthBenefits = async () => {
      try {
        const response = await fetch(`/ingredients/${ingredientId}/healthBenefits`);
        const data = await response.json();
        setHealthBenefits(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHealthBenefits();
  }, [ingredientId]);

  useEffect(() => {
    import(`../images/ingredients/${ingredientId}.jpg`)
      .then(module => setIngredientImg(module.default))
      .catch(() => setIngredientImg(null));
  }, [ingredientId]);

  useEffect(() => {
    const imageImports = [];
    for (let i = 1; i <= 30; i++) {
      const imageImport = import(`../images/ingredients/${i}.jpg`)
        .then(module => module.default)
        .catch(() => null);

      imageImports.push(imageImport);
    }

    Promise.all(imageImports).then(images => {
      setIngredients(images);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="part-1">
          <div className="row">
            <div className="col-6 p-25">
              <h1 className="section-heading">Health Benefit</h1>
              <ul className="health-beni">
                {healthBenefits.map((beni) => (
                  <div key={beni.id}>
                    <li className="beni">{beni.name}</li>
                    <p className="description">
                      {beni.desc}
                      </p>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col-6">
              <h1 className="section-heading">{props.name}</h1>
              <figure className="ingredient__pic-wrap">
                <img
                  className="ingredient__img"
                  src={ingredientImg} 
                  alt="Ingredient Image"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="item">
            <p className="name-item">Calo</p>
            <p className="number-item">{calo}</p>
          </div>

          <div className="item">
            <p className="name-item">Fat</p>
            <p className="number-item">{fat}</p>
          </div>

          <div className="item">
            <p className="name-item">Sodium</p>
            <p className="number-item">{sodium}</p>
          </div>

          <div className="item">
            <p className="name-item">Carbo</p>
            <p className="number-item">{carbo}</p>
          </div>
        </div>

      </div>

      <Footerr />
    </>
  );
}

export default IngredientDetails;
