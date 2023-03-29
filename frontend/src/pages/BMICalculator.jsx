import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [isHealthyWeight, setIsHealthyWeight] = useState(false);
  const [suggestedWeightRange, setSuggestedWeightRange] = useState("");
  const [suggestedCalorie, setSuggestedCalorie] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
    setIsHealthyWeight(bmiValue >= 18.5 && bmiValue <= 24.9);
    setSuggestedWeightRange(
      `${(18.5 * heightInMeters * heightInMeters).toFixed(2)}kg - ${(24.9 * heightInMeters * heightInMeters).toFixed(2)}kg`
    );
    if (bmiValue < 18.5) {
      const suggestedWeight = 18.5 * heightInMeters * heightInMeters;
      const calorieDeficit = (weight - suggestedWeight) * 7700;
      setSuggestedCalorie(`You need to add ${Math.round(calorieDeficit / 7)} calories per day to reach a healthy weight.`);
    } else if (bmiValue > 24.9) {
      const suggestedWeight = 24.9 * heightInMeters * heightInMeters;
      const calorieSurplus = (suggestedWeight - weight) * 7700;
      setSuggestedCalorie(`You need to reduce ${Math.round(calorieSurplus / 7)} calories per day to reach a healthy weight.`);
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi > 0 && (
        <div>
          <p>Your BMI is {bmi}</p>
          {isHealthyWeight ? (
            <p>You are within the healthy weight range</p>
          ) : (
            <div>
              <p>You are not within the healthy weight range</p>
              <p>Suggested weight range: {suggestedWeightRange}</p>
              {suggestedCalorie && <p>{suggestedCalorie}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
