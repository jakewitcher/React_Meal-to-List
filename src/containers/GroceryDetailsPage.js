import React from "react";
import { connect } from "react-redux";
import GroceryItems from "../components/grocery/GroceryItems";

export const GroceryDetailsPage = props => {
  return (
    <div className="details__container">
      <div className="details">
        <GroceryItems
          groceryName={props.grocery.name}
          itemList={props.grocery.itemList}
          isDetails={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    groceryLists: state.groceryLists,
    grocery: state.groceryLists.groceryList.filter(
      list => list.id === props.match.params.groceryId
    )[0]
  };
};

export default connect(mapStateToProps)(GroceryDetailsPage);
