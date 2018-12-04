import React from 'react';

const GroceryItem = (props) =>  {
    const { itemName, amount, unit, id } = props.item;
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
                className="fas fa-trash"
                onClick={() => props.deleteGroceryItem(id)}    
            />
        </li>
    )
}

export default GroceryItem;