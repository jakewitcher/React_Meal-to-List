import React from "react";
import { Item } from "../store/item/types";

interface IGroceryItemProps {
  isDetails: boolean;
  item: Item;
  deleteGroceryItem(name: string): void;
}

const GroceryItem: React.FC<IGroceryItemProps> = props => {
  const { itemName, amount, unit } = props.item;
  return (
    <li className="itemlist__item">
      <p className="item__name">{itemName}</p>
      <p className="item__amount">
        {amount} {unit}
      </p>
      {!props.isDetails && (
        <div className="item__update">
          <i
            className="fas fa-trash item__update-delete"
            onClick={() => props.deleteGroceryItem(itemName)}
          />
        </div>
      )}
    </li>
  );
};

export default GroceryItem;
