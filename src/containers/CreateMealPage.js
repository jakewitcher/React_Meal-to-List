import React from 'react';
import MealForm from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';


const CreateMealPage = (props) => {
    return (
        <div>
            <div className="meal">
                <MealForm {...props} />
                <MealItems
                    mealName={props.mealProps.mealName}
                    itemList={props.mealProps.itemList}
                />
            </div>
        </div>
       
    )
};

export default CreateMealPage;