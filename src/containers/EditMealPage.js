import React from 'react';
import EditMealForm from '../components/meal/EditMealForm';
import MealItems from '../components/meal/MealItems';
import { editMeal } from '../actions/meal'

const EditMealPage = (props) => {
    const { mealName, itemList, dispatch, deleteMealItem } = props.mealProps;
    return (
            <div className="meal">
                <EditMealForm 
                    {...props}
                    editMeal={editMeal}
                />
                <MealItems
                    mealName={mealName}
                    itemList={itemList}
                    deleteMealItem={deleteMealItem}
                    dispatch={dispatch}
                />
            </div>
    );
}

export default EditMealPage;