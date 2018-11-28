import React from 'react';
import MealListsPage from '../containers/MealListsPage';
import CreateMealPage from '../containers/CreateMealPage';
import EditMealPage from '../containers/EditMealPage';
import PageNotFound from '../containers/PageNotFound';


const MealBranch = (props) => {
    const { listOfMeals, editMeal, createMeal } = props;

    if (listOfMeals) {
        return (
            <div>
                <MealListsPage {...props} />
            </div>
        );
    } else if (editMeal) {
        return (
            <div>
                <EditMealPage {...props} />
            </div>
        );
    } else if (createMeal) {
        return (
            <div>
                <CreateMealPage {...props} />
            </div>
        );
    } else {
        return (
            <div>
                <PageNotFound />
            </div>
        );
    }
}

export default MealBranch;

