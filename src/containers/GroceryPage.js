import React, { Component } from "react";
import { connect } from "react-redux";
import GroceryForm from "../components/grocery/GroceryForm";
import GroceryItems from "../components/grocery/GroceryItems";
import { onAddGrocery, onEditGrocery } from "../actions/grocery";

export class GroceryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryName: props.grocery ? props.grocery.name : "",
      selectedMeal: props.meals.mealList[0] || {},
      itemList: props.grocery ? props.grocery.itemList : [],
      groceryListMeals: props.grocery ? props.grocery.groceryListMeals : {}
    };
  }

  deleteGroceryItem = name => {
    const newGroceryList = this.state.itemList.filter(
      item => item.itemName !== name
    );
    this.setState({
      itemList: newGroceryList
    });
  };

  addMealToList = () => {
    const { itemList, selectedMeal, groceryListMeals } = this.state;
    const listCopy = itemList.map(i => Object.assign({}, i));

    const combinedItemList = selectedMeal.itemList.reduce((list, item) => {
      const itemFound = list.find(i => i.itemName === item.itemName);
      if (itemFound) {
        itemFound.amount = item.amount + itemFound.amount;
        return list;
      }

      list.push(item);
      return list;
    }, listCopy);

    const mealsCopy = Object.assign({}, groceryListMeals);

    const updatedGroceryListMeals = {
      ...mealsCopy,
      [selectedMeal.id]: (mealsCopy[selectedMeal.id] || 0) + 1
    };

    this.setState({
      itemList: combinedItemList,
      groceryListMeals: updatedGroceryListMeals
    });
  };

  selectedMealChange = e => {
    const { meals } = this.props;
    const selectedMealName = e.target.value;
    const selectedMeal = meals.mealList.filter(
      meal => meal.name === selectedMealName
    );
    this.setState({
      selectedMeal: selectedMeal[0]
    });
  };

  groceryNameChange = e => {
    const groceryName = e.target.value;
    this.setState({ groceryName });
  };

  resetGrocery = () => {
    this.setState({ groceryName: "", itemList: [] });
  };
  render() {
    return (
      <div>
        <div className="update--grocery">
          <GroceryForm
            selectedMeal={this.state.selectedMeal}
            groceryName={this.state.groceryName}
            itemList={this.state.itemList}
            groceryListMeals={this.state.groceryListMeals}
            selectedMealChange={this.selectedMealChange}
            groceryNameChange={this.groceryNameChange}
            addMealToList={this.addMealToList}
            resetGrocery={this.resetGrocery}
            meals={this.props.meals}
            groceryId={this.props.grocery ? this.props.grocery.id : ""}
            updateGrocery={
              this.props.grocery
                ? this.props.onEditGrocery
                : this.props.onAddGrocery
            }
          />
          <GroceryItems
            groceryName={this.state.groceryName}
            itemList={this.state.itemList}
            deleteGroceryItem={this.deleteGroceryItem}
            isDetails={false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    groceryLists: state.groceryLists,
    meals: state.meals,
    grocery: state.groceryLists.groceryList.filter(
      list => list.id === props.match.params.groceryId
    )[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditGrocery: data => dispatch(onEditGrocery(data)),
    onAddGrocery: data => dispatch(onAddGrocery(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPage);
