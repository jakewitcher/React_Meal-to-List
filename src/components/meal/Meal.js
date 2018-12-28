import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onDeleteMeal } from '../../actions/meal';

export const Meal = (props) => {
    const { name, id, itemList } = props;
    return (
        <div className="list-type">
            <Link className="list-type__link" to={`/meals/meal/${id}`}>
                <p className="list-type__name">{name}</p>
            </Link>
            <p className="list-type__details">number of items: <span className="list-type__details list-type__details--span"> {itemList.length}</span></p>
            <div className="list-type__update">
                <Link className="list-type__link" to={`/meals/edit/${id}`}>
                    <i className="list-type__edit fas fa-edit" />
                </Link>
                <i
                    className="list-type__delete fas fa-trash"
                    onClick={() => props.onDeleteMeal(id)}
                />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMeal: (id) => dispatch(onDeleteMeal(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Meal);