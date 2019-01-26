import React from "react";

const MealForm = props => {
  const {
    mealNameChange,
    itemNameChange,
    amountChange,
    unitChange,
    addItem,
    resetMeal,
    mealName,
    itemName,
    amount,
    unit,
    itemList,
    updateMeal,
    mealId
  } = props;

  const pluralUnitValue = (amount, unitType) => {
    if (amount < 2) {
      return `${unitType}`;
    }
    return `${unitType}s`;
  };

  const handleMealChange = (name, id, itemList) => {
    updateMeal({
      name,
      itemList,
      id
    });
    resetMeal();
  };

  return (
    <div className="form">
      <div className="input-box input-box--item-name">
        <p>Item</p>
        <input
          className="input"
          type="text"
          value={itemName}
          onChange={itemNameChange}
        />
      </div>

      <div className="input-box input-box--amount">
        <p>Amount</p>
        <input
          className="input"
          type="number"
          value={amount}
          onChange={amountChange}
        />
      </div>

      <div className="input-box input-box--unit">
        <p>Unit</p>
        <select
          className="input input--dropdown"
          name="unit"
          value={unit}
          onChange={unitChange}
        >
          <option value={""}>{"none"}</option>
          <option value={pluralUnitValue(amount, "pound")}>
            {pluralUnitValue(amount, "pound")}
          </option>
          <option value={pluralUnitValue(amount, "ounce")}>
            {pluralUnitValue(amount, "ounce")}
          </option>
          <option value={pluralUnitValue(amount, "gallon")}>
            {pluralUnitValue(amount, "gallon")}
          </option>
          <option value={pluralUnitValue(amount, "quart")}>
            {pluralUnitValue(amount, "quart")}
          </option>
          <option value={pluralUnitValue(amount, "pint")}>
            {pluralUnitValue(amount, "pint")}
          </option>
          <option value={pluralUnitValue(amount, "item")}>
            {pluralUnitValue(amount, "item")}
          </option>
          <option value={pluralUnitValue(amount, "bag")}>
            {pluralUnitValue(amount, "bag")}
          </option>
          <option value={pluralUnitValue(amount, "container")}>
            {pluralUnitValue(amount, "container")}
          </option>
        </select>
      </div>
      <div className="button-box__add">
        <button className="button button__add" onClick={addItem}>
          Add Item
        </button>
      </div>
      <div>
        <div className="input-box__meal-name">
          <p>Meal Name</p>
          <input
            className="input__meal-name"
            type="text"
            value={mealName}
            onChange={mealNameChange}
          />
        </div>
        <div className="button-box__save">
          <button
            className="button button__save"
            onClick={() => handleMealChange(mealName, mealId, itemList)}
          >
            Save Meal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealForm;
