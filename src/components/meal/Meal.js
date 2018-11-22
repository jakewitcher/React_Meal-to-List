import React, { Component } from 'react';
import MealFormContainer from './MealFormContainer';
import MealItems from './MealItems';

class Meal extends Component {
    render() {
        return (
            <div className="grocery">
                <MealFormContainer />
                <MealItems />
            </div>
        );
    };
}

export default Meal;