import React from 'react';
import CreateMealForm from '../components/meal/CreateMealForm';
import MealItems from '../components/meal/MealItems';
import { addMeal } from '../actions/meal';


const CreateMealPage = (props) => {
    const { mealName, itemList, dispatch, deleteMealItem, itemToEdit } = props.mealProps;
    return (
        <div>
            <div className="meal">
                <CreateMealForm 
                    {...props}
                    addMeal={addMeal} 
                />
                <MealItems
                    mealName={mealName}
                    itemList={itemList}
                    itemToEdit={itemToEdit}
                    deleteMealItem={deleteMealItem}
                    dispatch={dispatch}
                />
            </div>
        </div>
       
    )
};

export default CreateMealPage;