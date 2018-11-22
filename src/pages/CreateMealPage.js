import React, { Component } from 'react';
import MealFormContainer from '../components/meal/MealFormContainer';
import MealItems from '../components/meal/MealItems';

class CreateMealPage extends Component {
    render() {
        return (
            <div className="grocery">
                <MealFormContainer />
                <MealItems />
            </div>
        );
    };
}

export default CreateMealPage;