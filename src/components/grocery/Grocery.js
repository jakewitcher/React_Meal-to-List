import React from 'react';

const Grocery = (props) => {
    const { name } = props;
    return (
        <div>
            <p>{name}</p>
            <i className="fas fa-edit" />
            <i className="fas fa-trash" />
        </div>
    );
}

export default Grocery;