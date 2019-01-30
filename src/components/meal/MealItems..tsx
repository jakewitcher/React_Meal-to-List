import * as React from "react";
import MealItem from "./MealItem";

interface Item {
  amount: number;
  itemName: string;
  unit: string;
}

interface IMealItemsProps {
  isDetails: boolean;
  itemList: Item[];
  mealName: string;
  deleteMealItem(name: string): void;
  itemToEdit(name: string): void;
}

const MealItems: React.FC<IMealItemsProps> = props => {
  const { mealName, itemList, deleteMealItem, itemToEdit, isDetails } = props;
  return (
    <div className="itemlist">
      <h1 className="itemlist__header">{mealName || "Meal"}</h1>
      {itemList.length > 0 && (
        <ul className="itemlist__body">
          {itemList.map(item => {
            return (
              <MealItem
                item={item}
                itemToEdit={itemToEdit}
                deleteMealItem={deleteMealItem}
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

export default MealItems;
