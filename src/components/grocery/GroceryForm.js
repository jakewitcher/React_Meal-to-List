import React from 'react';

const GroceryForm = (props) => {
    const { selectedMealChange, selectedMeal, meals, groceryName, groceryNameChange, addMealToMap } = props;
    return (
        <div className="groceryform">
            <h2 className="groceryform__header">Create a New Grocery List</h2>
            <div className="groceryform__form">
                <div className="groceryform__nameinputfield">
                <p>Grocery List Name</p>
                <input 
                    className="groceryform__nameinputfield--input" 
                    type="text" 
                    value={groceryName}
                    onChange={groceryNameChange}
                />
                </div>
                <div className="groceryform__iteminputfields">
                <div>
                    <p>Meals</p>
                    <select 
                        className="groceryform__iteminputfields--input groceryform__iteminputfields--dropdown"
                        name="selectedMeal"
                        value={selectedMeal.name}
                        onChange={selectedMealChange}
                    >
                        {
                            meals.mealList.map(meal => <option value={meal.name} key={meal.id}>{meal.name}</option>)
                        }
                    </select>
                </div>
                <div className="groceryform__button">
                    <button 
                        className="groceryform__button--add"
                        onClick={addMealToMap}
                    >
                        Add Meal
                    </button>
                </div>
                </div>
                <div>
                <button className="groceryform__button--save">Save Grocery List</button>
                </div>
            </div>

        </div>
    )
}

export default GroceryForm;