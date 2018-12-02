import React from 'react';

const MealForm = (props) => {
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
        dispatch
    } = props.mealProps;
    const { addMeal } = props;

    return (
        <div className="form">
            <h2 className="form__header">Create a New Meal</h2>
            <div className="form__form">
                <div className="form__nameinputfield">
                    <p>Meal Name</p>
                    <input
                        className="form__nameinputfield--input"
                        type="text"
                        value={mealName}
                        onChange={mealNameChange}
                    />
                </div>
                <div className="form__iteminputfields">
                    <div>
                        <p>Item</p>
                        <input
                            className="form__iteminputfields--input"
                            type="text"
                            value={itemName}
                            onChange={itemNameChange}
                        />
                    </div>

                    <div>
                        <p>Amount</p>
                        <input
                            className="form__iteminputfields--input"
                            type="number"
                            value={amount}
                            onChange={amountChange}
                        />
                    </div>

                    <div>
                        <p>Unit</p>
                        <select
                            className="form__iteminputfields--input form__iteminputfields--dropdown"
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
                    <div className="form__button">
                        <button
                            className="form__button--add"
                            onClick={addItem}
                        >
                            Add Item
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className="form__button--save"
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



export default MealForm;