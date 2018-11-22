import React from 'react';

const MealItem = (props) => {
    const { itemName, amount, unit } = props.item;
    return (
        <li className="itemlist__item">
            <div className="item">
                <p>{itemName}</p>
            </div>
            <div className="item">
                <p>{amount}</p>
            </div>
            <div className="item">
                <p>{unit}</p>
            </div>
        </li>
    );
}

export default MealItem;