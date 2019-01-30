import React from "react";

interface IMealItemProps {
  isDetails: boolean;
  item: { itemName: string; amount: number; unit: string };
  deleteMealItem(name: string): void;
  itemToEdit(name: string): void;
}

const MealItem = (props: IMealItemProps) => {
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
            className="fas fa-edit item__update-edit"
            onClick={() => {
              props.itemToEdit(itemName);
            }}
          />
          <i
            className="fas fa-trash item__update-delete"
            onClick={() => props.deleteMealItem(itemName)}
          />
        </div>
      )}
    </li>
  );
};

export default MealItem;
