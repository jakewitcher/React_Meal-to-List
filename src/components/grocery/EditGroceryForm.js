import React from 'react';

const EditGroceryForm = (props) => {
    const {
        selectedMealChange,
        selectedMeal,
        meals,
        groceryName,
        itemsList,
        groceryNameChange,
        addMealToList,
        resetGrocery,
        dispatch,
    } = props.groceryProps;
    const { editGrocery, match } = props;
    return (
        <div className="form">
            <h2 className="form__header">Edit Grocery List</h2>
            <div className="form__form">
                <div className="form__nameinputfield">
                    <p>Grocery List Name</p>
                    <input
                        className="form__nameinputfield--input"
                        type="text"
                        value={groceryName}
                        onChange={groceryNameChange}
                    />
                </div>
                <div className="form__iteminputfields">
                    <div>
                        <p>Meals</p>
                        <select
                            className="form__iteminputfields--input form__iteminputfields--dropdown"
                            name="selectedMeal"
                            value={selectedMeal.name}
                            onChange={selectedMealChange}
                        >
                            {
                                meals.mealList.map(meal => <option value={meal.name} key={meal.id}>{meal.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form__button">
                        <button
                            className="form__button--add"
                            onClick={addMealToList}
                        >
                            Add Meal
                    </button>
                    </div>
                </div>
                <div>
                    <button
                        className="form__button--save"
                        onClick={() => {
                            const id = match.params.groceryId;
                            dispatch(editGrocery({
                                name: groceryName,
                                items: itemsList,
                                id,
                            }));
                            resetGrocery();
                        }
                        }
                    >
                        Save Grocery List
                </button>
                </div>
            </div>

        </div>
    )
}

export default EditGroceryForm;