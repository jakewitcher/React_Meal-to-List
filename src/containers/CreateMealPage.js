import React from 'react';
import CreateMealForm from '../components/meal/CreateMealForm';
import MealItems from '../components/meal/MealItems';
import { addMeal } from '../actions/meal';


const CreateMealPage = (props) => {
    return (
        <div>
            <div className="meal">
                <CreateMealForm 
                    {...props}
                    addMeal={addMeal} 
                />
                <MealItems
                    mealName={props.mealProps.mealName}
                    itemList={props.mealProps.itemList}
                />
            </div>
        </div>
       
    )
};

export default CreateMealPage;