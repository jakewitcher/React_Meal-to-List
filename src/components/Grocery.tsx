import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { onDeleteGrocery } from "../store/grocery/actions";
import { Item } from "../store/item/types";

interface IGroceryProps {
  name: string;
  id: string;
  itemList: Item[];
  onDeleteGrocery(id: string): void;
}

export const Grocery: React.FC<IGroceryProps> = props => {
  const { name, id, itemList } = props;
  return (
    <div className="list-type">
      <Link className="list-type__link" to={`grocerylists/grocery-list/${id}`}>
        <p className="list-type__name">{name}</p>
      </Link>
      <p className="list-type__details">
        number of items:{" "}
        <span className="list-type__details list-type__details--span">
          {itemList.length}
        </span>
      </p>
      <div className="list-type__update">
        <Link className="list-type__link" to={`grocerylists/edit/${id}`}>
          <i className="list-type__edit fas fa-edit" />
        </Link>
        <i
          className="list-type__delete fas fa-trash"
          onClick={() => props.onDeleteGrocery(id)}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDeleteGrocery: (id: string) => dispatch(onDeleteGrocery(id))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Grocery);
