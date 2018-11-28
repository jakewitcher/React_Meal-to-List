import React from 'react';
import MealForm from '../components/meal/MealForm';
import MealItems from '../components/meal/MealItems';


const CreateMealPage = (props) => {
    const { viewListOfMeals } = props;
    return (
        <div>
            <div className="meal">
                <MealForm {...props} />
                <MealItems
                    mealName={props.mealName}
                    itemList={props.itemList}
                />
            </div>
            <div className="form-tabs">
                <button onClick={() => viewListOfMeals()} className="form-tabs__button">View List of Meals</button>
            </div>
        </div>
       
    )
};

export default CreateMealPage;