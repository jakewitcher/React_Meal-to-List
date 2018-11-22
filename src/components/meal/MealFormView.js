import React from 'react';

const MealFormView = (props) => {
    const {
        mealNameChange,
        itemNameChange,
        amountChange,
        unitChange,
        addItem,
        addMeal,
        resetMeal,
        mealName,
        itemName,
        amount,
        unit,
        itemList,
        dispatch
    } = props;

    return (
        <div className="mealform">
            <h2 className="mealform__header">Create a New Meal</h2>
            <div className="mealform__form">
                <div className="mealform__nameinputfield">
                    <p>Meal Name</p>
                    <input
                        className="mealform__nameinputfield--input"
                        type="text"
                        value={mealName}
                        onChange={mealNameChange}
                    />
                </div>
                <div className="mealform__iteminputfields">
                    <div>
                        <p>Item</p>
                        <input
                            className="mealform__iteminputfields--input"
                            type="text"
                            value={itemName}
                            onChange={itemNameChange}
                        />
                    </div>

                    <div>
                        <p>Amount</p>
                        <input
                            className="mealform__iteminputfields--input"
                            type="number"
                            value={amount}
                            onChange={amountChange}
                        />
                    </div>

                    <div>
                        <p>Unit</p>
                        <select
                            className="mealform__iteminputfields--input mealform__iteminputfields--dropdown"
                            name="unit"
                            value={unit}
                            onChange={unitChange}
                        >
                            <option value="pound(s)">pound(s)</option>
                            <option value="ounce(s)">ounce(s)</option>
                            <option value="gallon(s)">gallons</option>
                            <option value="quart(s)">quart(s)</option>
                            <option value="pint(s)">pint(s)</option>
                            <option value="item(s)">item(s)</option>
                            <option value="bag(s)">bag(s)</option>
                            <option value="box(es)">box(es)</option>
                            <option value="container(s)">container(s)</option>
                        </select>
                    </div>
                    <div className="mealform__button">
                        <button
                            className="mealform__button--add"
                            onClick={addItem}
                        >
                            Add Item
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className="mealform__button--save"
                        onClick={() => {
                            const name = mealName;
                            dispatch(addMeal({
                                name,
                                itemList
                            }));
                            resetMeal();
                        }}
                    >
                        Save Meal
                    </button>
                </div>
            </div>
        </div>
    )
}



export default MealFormView;