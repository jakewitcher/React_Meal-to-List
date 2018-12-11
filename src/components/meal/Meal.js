import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeal } from '../../actions/meal';

export const Meal = (props) => {
    const { name, id } = props;
    return (
        <div>
            <p>{name}</p>

            <Link to={`/meals/edit/${id}`}>
                <i className="fas fa-edit" />
            </Link>
            <i
                className="fas fa-trash"
                onClick={() => props.deleteMeal(id)}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMeal: (id) => dispatch(deleteMeal(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Meal);