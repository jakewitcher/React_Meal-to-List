import { Item } from "../item/types";

export interface Grocery {
  name: string;
  id: string;
  itemList: Item[];
  groceryListMeals: { [propName: string]: number };
}
