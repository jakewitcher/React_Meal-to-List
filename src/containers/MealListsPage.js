import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditMealPage from './EditMealPage';
import Meal from '../components/meal/Meal';

const MealsList = (props) => {
    const { meals, dispatch, mealToEdit, mealProps, match } = props;
    return (
        <Router>
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
                <Route path={`${match.path}/edit/:mealId`} render={props => <EditMealPage {...props} mealProps={mealProps}/>} exact={true}/>
            </div>
        </Router>
    );
}

export default MealsList;