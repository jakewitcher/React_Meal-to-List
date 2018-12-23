import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onDeleteMeal } from '../../actions/meal';

export const Meal = (props) => {
    const { name, id } = props;
    return (
        <div>
            <Link to={`/meals/meal/${id}`}>
                <p>{name}</p>
            </Link>

            <Link to={`/meals/edit/${id}`}>
                <i className="fas fa-edit" />
            </Link>
            <i
                className="fas fa-trash"
                onClick={() => props.onDeleteMeal(id)}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMeal: (id) => dispatch(onDeleteMeal(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Meal);