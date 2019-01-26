import React from "react";
import { connect } from "react-redux";
import Grocery from "../components/grocery/Grocery";

export const GroceryListsPage = props => {
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

const mapStateToProps = state => {
  return {
    groceryLists: state.groceryLists
  };
};

export default connect(mapStateToProps)(GroceryListsPage);
