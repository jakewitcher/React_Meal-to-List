import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryItems = props => {
  const { groceryName, itemList, deleteGroceryItem, isDetails } = props;
  return (
    <div className="itemlist">
      <h1 className="itemlist__header">{groceryName || "New Grocery List"}</h1>
      {itemList.length > 0 && (
        <ul className="itemlist__body">
          {itemList.map(item => {
            return (
              <GroceryItem
                item={item}
                deleteGroceryItem={deleteGroceryItem}
                key={item.itemName}
                isDetails={isDetails}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GroceryItems;
