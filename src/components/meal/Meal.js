import React from 'react';
import { connect } from 'react-redux';
import { deleteMeal } from '../../actions/meal';

const Meal = (props) => {
    const { name, id, dispatch, editExistingMeal } = props;
    return (
        <div>
            <p>{name}</p>
            <i 
                className="fas fa-edit"
                onClick={() => editExistingMeal()}
            />
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteMeal(id))}    
            />
        </div>
    );
}

export default connect()(Meal);