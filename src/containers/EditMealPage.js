import React from 'react';
import EditMealForm from '../components/meal/EditMealForm';
import MealItems from '../components/meal/MealItems';
import { editMeal } from '../actions/meal'

const EditMealPage = (props) => {
    return (
            <div className="meal">
                <EditMealForm 
                    {...props}
                    editMeal={editMeal}
                />
                <MealItems
                    mealName={props.mealProps.mealName}
                    itemList={props.mealProps.itemList}
                />
            </div>
    );
}

export default EditMealPage;