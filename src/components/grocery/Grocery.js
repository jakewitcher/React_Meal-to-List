import React from 'react';
import { connect } from 'react-redux';
import { deleteGrocery } from '../../actions/grocery';

const Grocery = (props) => {
    const { name, dispatch, id } = props;
    return (
        <div>
            <p>{name}</p>
            <i 
                className="fas fa-edit"
            />
            <i 
                className="fas fa-trash"
                onClick={() => dispatch(deleteGrocery(id))}    
            />
        </div>
    );
}

export default connect()(Grocery);