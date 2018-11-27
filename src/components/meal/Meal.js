import React from 'react';

const Meal = (props) => {
    const { name } = props;
    return (
        <p>{name}</p>
    )
}

export default Meal;