import React from 'react';
import MealItem from './MealItem'
import { connect } from 'react-redux';

const MealItems = (props) => {
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">New Meal</h1>
            <ul className="itemlist__body itemlist__body--border">
                <MealItem />
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        meal: state.meal
    };
};

export default connect(mapStateToProps)(MealItems);