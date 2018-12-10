import React from 'react';
import { connect } from 'react-redux';
import Meal from '../components/meal/Meal';

const MealListsPage = (props) => {
    return (
        <div>
            {
                props.meals.mealList.map(meal => {
                    return <Meal
                        name={meal.name}
                        id={meal.id}
                        key={meal.id}
                    />
                })
            }

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals,
    }
}

export default connect(mapStateToProps)(MealListsPage);