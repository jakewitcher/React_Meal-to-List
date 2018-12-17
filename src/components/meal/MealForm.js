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
        updateMeal,
        mealId,
    } = props;

    const pluralUnitValue = (amount, unitType) => {
        if (amount < 2) {
            return `${unitType}`
        }
        return `${unitType}s`
    };

    const handleMealChange = (name, id, list) => {
        updateMeal({
            name,
            itemList,
            id,
        });
        resetMeal();
    };



    return (
        <div className="form">
            <div className="form__form">
                <div className="form__nameinputfield">
                    <input
                        className="form__nameinputfield--input"
                        type="text"
                        placeholder="meal name"
                        value={mealName}
                        onChange={mealNameChange}
                    />
                </div>
                <div className="form__iteminputfields">
                    <div>
                        <input
                            className="form__iteminputfields--input"
                            type="text"
                            placeholder="item name"
                            value={itemName}
                            onChange={itemNameChange}
                        />
                    </div>

                    <div>
                        <input
                            className="form__iteminputfields--input"
                            type="number"
                            placeholder="amount"
                            value={amount}
                            onChange={amountChange}
                        />
                    </div>

                    <div>
                        <select
                            className="form__iteminputfields--input form__iteminputfields--dropdown"
                            name="unit"
                            value={unit}
                            onChange={unitChange}
                        >
                            <option value={pluralUnitValue(amount, 'pound')}>{pluralUnitValue(amount, 'pound')}</option>
                            <option value={pluralUnitValue(amount, 'ounce')}>{pluralUnitValue(amount, 'ounce')}</option>
                            <option value={pluralUnitValue(amount, 'gallon')}>{pluralUnitValue(amount, 'gallon')}</option>
                            <option value={pluralUnitValue(amount, 'quart')}>{pluralUnitValue(amount, 'quart')}</option>
                            <option value={pluralUnitValue(amount, 'pint')}>{pluralUnitValue(amount, 'pint')}</option>
                            <option value={pluralUnitValue(amount, 'item')}>{pluralUnitValue(amount, 'item')}</option>
                            <option value={pluralUnitValue(amount, 'bag')}>{pluralUnitValue(amount, 'bag')}</option>
                            <option value={pluralUnitValue(amount, 'container')}>{pluralUnitValue(amount, 'container')}</option>
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
                        onClick={() => handleMealChange(mealName, mealId, itemList)}
                    >
                        Save Meal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MealForm;