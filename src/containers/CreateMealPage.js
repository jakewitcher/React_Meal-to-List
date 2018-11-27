import React from 'react';
import MealForm from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';


const CreateMealPage = (props) => {
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
        dispatch,
    } = props;
    return (
        <div className="meal">
            <MealForm
                mealNameChange={mealNameChange}
                itemNameChange={itemNameChange}
                amountChange={amountChange}
                unitChange={unitChange}
                addItem={addItem}
                addMeal={addMeal}
                resetMeal={resetMeal}
                mealName={mealName}
                itemName={itemName}
                amount={amount}
                unit={unit}
                itemList={itemList}
                dispatch={dispatch}
            />
            <MealItems
                mealName={mealName}
                itemList={itemList}
            />
        </div>
    )
};

export default CreateMealPage;