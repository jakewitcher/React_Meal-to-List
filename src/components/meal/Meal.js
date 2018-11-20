import React, { Component } from 'react';
import MealForm from './MealForm';
import MealItems from './MealItems';

class Meal extends Component {
    render() {
        return (
            <div className="grocery">
                <MealForm />
                <MealItems />
            </div>
        );
    };
}

export default Meal;