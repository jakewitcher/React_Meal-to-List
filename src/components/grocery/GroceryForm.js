import React from 'react';

const GroceryForm = () => {
    return (
        <div className="groceryform">
            <h2 className="groceryform__header">Create a New Grocery List</h2>
            <div className="groceryform__form">
                <div className="groceryform__nameinputfield">
                <p>Grocery List Name</p>
                <input className="groceryform__nameinputfield--input" type="text" />
                </div>
                <div className="groceryform__iteminputfields">
                <div>
                    <p>Meals</p>
                    <select className="groceryform__iteminputfields--input groceryform__iteminputfields--dropdown"
                            name="selectedMeal"
                            required>
                    <option value="meal"></option>
                    </select>
                </div>
                <div className="groceryform__button">
                    <button className="groceryform__button--add">Add Meal</button>
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