import React from "react";
import { connect } from "react-redux";
import GroceryItems from "../components/GroceryItems";
import { ApplicationState } from "../store/index";
import { RouteComponentProps } from "react-router";
import { Grocery } from "../store/grocery/types";

interface IGroceryDetailsPageProps
  extends RouteComponentProps<{ groceryId: string }> {
  grocery: Grocery;
}

export const GroceryDetailsPage: React.FC<IGroceryDetailsPageProps> = props => {
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

const mapStateToProps = (
  state: ApplicationState,
  props: IGroceryDetailsPageProps
) => {
  return {
    groceryLists: state.groceryLists,
    grocery: state.groceryLists.groceryList.filter(
      list => list.id === props.match.params.groceryId
    )[0]
  };
};

export default connect(mapStateToProps)(GroceryDetailsPage);
