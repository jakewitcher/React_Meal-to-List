import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeal } from '../../actions/meal';

const Meal = (props) => {
    const { name, id, dispatch, mealToEdit } = props;
    return (
        <div>
            <p>{name}</p>
            
             <Link to={`/meals/edit/${id}`}>
                <i 
                    className="fas fa-edit"
                    onClick={() => {
                        mealToEdit(id); 
                    }}
                />
            </Link>
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteMeal(id))}    
            />
        </div>
    );
}

export default connect()(Meal);