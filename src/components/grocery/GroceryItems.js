import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryItems = (props) => {
    const { groceryName, itemsList, deleteGroceryItem } = props;
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">{groceryName || 'New Grocery List'}</h1>
            {itemsList.length > 0 && <ul className="itemlist__body">
                {itemsList.map(item => {
                    return (
                        <GroceryItem 
                            item={item}
                            id={item.id}
                            deleteGroceryItem={deleteGroceryItem}
                            key={item.id}
                        />
                    )
                })}
            </ul>}
        </div>
    )
}

export default GroceryItems;