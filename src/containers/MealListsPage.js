import React from 'react';
import Meal from '../components/meal/Meal';

const MealsList = (props) => {
    const { meals, createNewMeal, dispatch, editExistingMeal } = props;
    return (
        <div>
            {
                meals.map(meal => {
                    return <Meal
                        name={meal.name}
                        id={meal.id}
                        dispatch={dispatch}
                        editExistingMeal={editExistingMeal}
                        key={meal.id}
                    />
                })
            }
            <div className="form-tabs">
                    <button onClick={() => createNewMeal()} className="form-tabs__button">Create a New Meal</button>
            </div>
        </div>
    );
}

export default MealsList;