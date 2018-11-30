import React from 'react';
import { connect } from 'react-redux';
import { deleteMeal } from '../../actions/meal';

const Meal = (props) => {
    const { name, id, dispatch } = props;
    return (
        <div>
            <p>{name}</p>
            <i className="fas fa-edit" />
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteMeal(id))}    
            />
        </div>
    );
}

export default connect()(Meal);