import React, { Component, ChangeEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import GroceryForm from "../components/GroceryForm";
import GroceryItems from "../components/GroceryItems";
import { onAddGrocery, onEditGrocery } from "../store/grocery/actions";
import { Grocery, GroceryMeals } from "../store/grocery/types";
import { MealState, Meal } from "../store/meal/types";
import { Item } from "../store/item/types";
import { ApplicationState } from "../store";
import { RouteComponentProps } from "react-router";

interface IGroceryPageProps extends RouteComponentProps<{ groceryId: string }> {
  grocery?: Grocery;
  meals: MealState;
  onAddGrocery(grocery: Grocery): void;
  onEditGrocery(grocery: Grocery): void;
}

interface IGroceryPageState {
  groceryName: string;
  selectedMeal: Meal;
  itemList: Item[];
  groceryListMeals: GroceryMeals;
}

export class GroceryPage extends Component<
  IGroceryPageProps,
  IGroceryPageState
> {
  constructor(props: IGroceryPageProps) {
    super(props);
    this.state = {
      groceryName: props.grocery ? props.grocery.name : "",
      selectedMeal: props.meals.mealList[0] || {},
      itemList: props.grocery ? props.grocery.itemList : [],
      groceryListMeals: props.grocery ? props.grocery.groceryListMeals : {}
    };
  }

  deleteGroceryItem = (name: string) => {
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

    const updatedGroceryListMeals = {
      ...groceryListMeals,
      [selectedMeal.id]: (groceryListMeals[selectedMeal.id] || 0) + 1
    };

    this.setState({
      itemList: combinedItemList,
      groceryListMeals: updatedGroceryListMeals
    });
  };

  selectedMealChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { meals } = this.props;
    const selectedMealName = e.target.value;
    const selectedMeal = meals.mealList.filter(
      meal => meal.name === selectedMealName
    );
    this.setState({
      selectedMeal: selectedMeal[0]
    });
  };

  groceryNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const groceryName = e.target.value;
    this.setState({ groceryName });
  };

  resetGrocery = () => {
    this.setState({ groceryName: "", itemList: [], groceryListMeals: {} });
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

const mapStateToProps = (state: ApplicationState, props: IGroceryPageProps) => {
  return {
    groceryLists: state.groceryLists,
    meals: state.meals,
    grocery: state.groceryLists.groceryList.filter(
      list => list.id === props.match.params.groceryId
    )[0]
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onEditGrocery: (data: Grocery) => dispatch(onEditGrocery(data)),
    onAddGrocery: (data: Grocery) => dispatch(onAddGrocery(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPage);
