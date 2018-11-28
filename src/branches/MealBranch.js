import React from 'react';
import MealListsPage from '../containers/MealListsPage';
import CreateMealPage from '../containers/CreateMealPage';
import EditMealPage from '../containers/EditMealPage';


const MealBranch = (props) => {
    const { listOfMeals, editMeal } = props;

    if (listOfMeals) {
        return (
            <div>
                <MealListsPage
                    meals={props.meals}
                />
            </div>
        );
    } else if (editMeal) {
        return (
            <div>
                <EditMealPage {...props} />
            </div>
        )
    } else {
        return (
            <div>
                <CreateMealPage {...props} />
            </div>
        );
    }
}

export default MealBranch;

