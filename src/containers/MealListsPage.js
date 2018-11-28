import React from 'react';
import Meal from '../components/meal/Meal';

const MealsList = (props) => {
    const { meals } = props;
    return (
        <div>
            {
                meals.map(meal => {
                    return <Meal
                        name={meal.name}
                        key={meal.id}
                    />
                })
            }
        </div>
    );
}

export default MealsList;