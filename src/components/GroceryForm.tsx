import React, { ChangeEvent } from "react";
import { Item } from "../store/item/types";
import { Meal, MealState } from "../store/meal/types";
import { Grocery, GroceryMeals } from "../store/grocery/types";

interface IMealFormProps {
  groceryName: string;
  itemList: [] | Item[];
  groceryId: string;
  selectedMeal: Meal;
  meals: MealState;
  groceryListMeals: GroceryMeals;
  addMealToList(): void;
  selectedMealChange(e: ChangeEvent<HTMLSelectElement>): void;
  groceryNameChange(e: React.FormEvent<HTMLInputElement>): void;
  resetGrocery(): void;
  updateGrocery(grocery: Grocery): void;
}

const GroceryForm: React.FC<IMealFormProps> = props => {
  const {
    selectedMealChange,
    selectedMeal,
    meals,
    groceryName,
    itemList,
    groceryListMeals,
    groceryNameChange,
    addMealToList,
    resetGrocery,
    updateGrocery,
    groceryId
  } = props;

  const handleGroceryChange = (
    name: string,
    itemList: Item[],
    groceryListMeals: GroceryMeals,
    id: string
  ) => {
    updateGrocery({
      name,
      itemList,
      groceryListMeals,
      id
    });
    resetGrocery();
  };

  return (
    <div className="form--grocery">
      <div className="input-box input-box--meal-name">
        <p>Meals</p>
        <select
          className="input input--dropdown"
          name="selectedMeal"
          value={selectedMeal.name}
          onChange={selectedMealChange}
        >
          {meals.mealList.map(meal => (
            <option value={meal.name} key={meal.id}>
              {meal.name}
            </option>
          ))}
        </select>
      </div>
      <div className="button-box__add--meal">
        <button className="button button__add" onClick={addMealToList}>
          Add Meal
        </button>
      </div>
      <div className="input-box__grocery-name">
        <p>Grocery List Name</p>
        <input
          className="input__grocery-name"
          type="text"
          value={groceryName}
          onChange={groceryNameChange}
        />
      </div>
      <div className="button-box__save--grocery">
        <button
          className="button button__save"
          onClick={() =>
            handleGroceryChange(
              groceryName,
              itemList,
              groceryListMeals,
              groceryId
            )
          }
        >
          Save Grocery List
        </button>
      </div>
    </div>
  );
};

export default GroceryForm;
