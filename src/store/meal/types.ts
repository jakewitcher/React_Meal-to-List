import { Item } from "../item/types";

export interface Meal {
  name: string;
  itemList: Item[];
  id: string;
}
