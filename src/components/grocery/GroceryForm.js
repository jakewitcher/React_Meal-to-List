import React from 'react';

const GroceryForm = (props) => {
    const {
        selectedMealChange,
        selectedMeal,
        meals,
        groceryName,
        itemList,
        groceryNameChange,
        addMealToList,
        resetGrocery,
        updateGrocery,
        groceryId,
    } = props;

    const handleGroceryChange = (name, id, itemList) => {
        updateGrocery({
            name,
            itemList,
            id,
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
                    {
                        meals.mealList.map(meal => <option value={meal.name} key={meal.id}>{meal.name}</option>)
                    }
                </select>
            </div>
            <div className="button-box__add--meal">
                <button
                    className="button button__add"
                    onClick={addMealToList}
                >
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
                    onClick={() => handleGroceryChange(groceryName, groceryId, itemList)}
                >
                    Save Grocery List
                </button>
            </div>
        </div>
    )
}

export default GroceryForm;