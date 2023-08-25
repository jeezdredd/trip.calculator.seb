import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateBudget } from "../redux/actions";
import { calculateTotalCost } from "../services/api";

const Calculator = () => {
  const [flightCost, setFlightCost] = useState(0);
  const [accommodationCost, setAccommodationCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [entertainmentCost, setEntertainmentCost] = useState(0);

  const dispatch = useDispatch();
  const budget = useSelector(state => state.budget);

  const handleCalculate = async () => {
    const totalCost = await calculateTotalCost({
      flightCost,
      accommodationCost,
      foodCost,
      entertainmentCost
    });
    dispatch(updateBudget(totalCost));
  };

  return (
    <div>
      <h2>Travel Cost Calculator</h2>
      {/* Вставьте компоненты для ввода стоимостей */}
      <button onClick={handleCalculate}>Calculate</button>
      <p>Total Estimated Cost: ${budget}</p>
    </div>
  );
};

export default Calculator;
