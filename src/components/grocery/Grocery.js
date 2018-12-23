import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onDeleteGrocery } from '../../actions/grocery';

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
                onClick={() => props.onDeleteGrocery(id)}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteGrocery: (id) => dispatch(onDeleteGrocery(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Grocery);