import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteGrocery } from '../../actions/grocery';

const Grocery = (props) => {
    const { name, dispatch, id, groceryToEdit } = props;
    return (
        <div>
            <p>{name}</p>
            <Link to={`grocerylists/edit/${id}`}>
                <i 
                    className="fas fa-edit"
                    onClick={() => {
                        groceryToEdit(id); 
                    }}
                />
            </Link>
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteGrocery(id))}    
            />
        </div>
    );
}

export default connect()(Grocery);