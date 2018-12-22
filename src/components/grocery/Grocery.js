import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onDeleteGroceryAsync } from '../../actions/grocery';

export const Grocery = (props) => {
    const { name, id } = props;
    return (
        <div>
            <Link to={`grocerylists/grocery-list/${id}`}>
            <p>{name}</p>
            </Link>

            <Link to={`grocerylists/edit/${id}`}>
                <i className="fas fa-edit" />
            </Link>
            <i
                className="fas fa-trash"
                onClick={() => props.onDeleteGroceryAsync(id)}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteGroceryAsync: (id) => dispatch(onDeleteGroceryAsync(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Grocery);