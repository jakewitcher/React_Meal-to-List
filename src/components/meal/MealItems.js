import React from 'react';
import MealItem from './MealItem'

const MealItems = () => {
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">New Meal</h1>
            <ul className="itemlist__body itemlist__body--border">
                <MealItem className="itemlist__item" />
            </ul>
        </div>
    );
}

export default MealItems;