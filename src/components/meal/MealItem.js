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
            <i 
                className="fas fa-edit"
                onClick={() => {
                        props.itemToEdit(itemName); 
                }}
            />
            <i 
                className="fas fa-trash"
                onClick={() => props.deleteMealItem(itemName)}    
            />
        </li>
    );
}

export default MealItem;