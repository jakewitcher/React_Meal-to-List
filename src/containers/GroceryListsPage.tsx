import React from "react";
import { connect } from "react-redux";
import Grocery from "../components/Grocery";
import { GroceryState } from "../store/grocery/types";
import { ApplicationState } from "../store/index";

interface IGroceryListsPageProps {
  groceryLists: GroceryState;
}

export const GroceryListsPage: React.FC<IGroceryListsPageProps> = props => {
  return (
    <div className="list__container">
      <div className="list">
        {props.groceryLists.groceryList.map(list => {
          return (
            <Grocery
              name={list.name}
              itemList={list.itemList}
              id={list.id}
              key={list.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    groceryLists: state.groceryLists
  };
};

export default connect(mapStateToProps)(GroceryListsPage);
