import React from 'react';
import Meal from '../components/meal/Meal';

const MealsList = (props) => {
    const { meals, dispatch, mealToEdit } = props;
    return (
        <div>
            {
                meals.map(meal => {
                    return <Meal
                        name={meal.name}
                        id={meal.id}
                        dispatch={dispatch}
                        mealToEdit={mealToEdit}
                        key={meal.id}
                    />
                })
            }
        </div>
    );
}

export default MealsList;