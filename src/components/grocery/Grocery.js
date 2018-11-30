import React from 'react';
import { connect } from 'react-redux';
import { deleteGrocery } from '../../actions/grocery';

const Grocery = (props) => {
    const { name, dispatch, editExistingGrocery, id } = props;
    return (
        <div>
            <p>{name}</p>
            <i 
                className="fas fa-edit"
                onClick={() => editExistingGrocery()}
            />
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteGrocery(id))}    
            />
        </div>
    );
}

export default connect()(Grocery);