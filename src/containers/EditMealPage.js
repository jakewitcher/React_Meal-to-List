import React from 'react';

const EditMealPage = (props) => {
    const { viewListOfMeals } = props;
    return (
        <div>
            <h1>This is the Edit Meal Page</h1>
            <div className="form-tabs">
                <button onClick={() => viewListOfMeals()} className="form-tabs__button">View List of Meals</button>
            </div>
        </div>
    );
}

export default EditMealPage;