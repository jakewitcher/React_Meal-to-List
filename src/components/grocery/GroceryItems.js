import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryItems = () => {
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">New Grocery List</h1>
            <ul className="itemlist__body">
                <GroceryItem className="itemlist__item" />
            </ul>
        </div>
    )
}

export default GroceryItems;