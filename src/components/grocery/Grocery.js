import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteGrocery } from '../../actions/grocery';

const Grocery = (props) => {
    const { name, id } = props;
    return (
        <div>
            <p>{name}</p>
            <Link to={`grocerylists/edit/${id}`}>
                <i className="fas fa-edit" />
            </Link>
            <i
                className="fas fa-trash"
                onClick={() => props.deleteGrocery(id)}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteGrocery: (id) => dispatch(deleteGrocery(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Grocery);