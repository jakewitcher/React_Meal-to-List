import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryItems = (props) => {
    const { groceryName } = props;
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">{groceryName || 'New Grocery List'}</h1>
            <ul className="itemlist__body">
                <GroceryItem className="itemlist__item" />
            </ul>
        </div>
    )
}

export default GroceryItems;