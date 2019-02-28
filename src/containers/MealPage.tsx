import React, { Component, ChangeEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import MealForm from "../components/MealForm";
import MealItems from "../components/MealItems";
import { onAddMeal, onEditMeal } from "../store/meal/actions";
import { onAddItem } from "../store/item/actions";
import { Item, ItemState } from "../store/item/types";
import { Meal } from "../store/meal/types";
import { ApplicationState } from "../store/index";
import { RouteComponentProps } from "react-router";

interface IMealPageProps extends RouteComponentProps<{ mealId: string }> {
  meal?: Meal;
  items: ItemState;
  onAddItem(name: string): void;
  onEditMeal(meal: Meal): void;
  onAddMeal(meal: Meal): void;
}

interface IMealPageState {
  mealName: string;
  itemName: string;
  amount: string;
  unit: string;
  itemList: Item[];
}

export class MealPage extends Component<IMealPageProps, IMealPageState> {
  constructor(props: IMealPageProps) {
    super(props);

    this.state = {
      mealName: props.meal ? props.meal.name : "",
      itemName: "",
      amount: "",
      unit: "",
      itemList: props.meal ? props.meal.itemList : []
    };
  }

  deleteMealItem = (name: string) => {
    const updateMealList = this.state.itemList.filter(
      item => item.itemName !== name
    );
    this.setState({
      itemList: updateMealList
    });
  };

  itemToEdit = (name: string) => {
    const selectedItem = this.state.itemList.filter(
      item => item.itemName === name
    )[0];
    this.setState({
      itemName: selectedItem.itemName,
      amount: selectedItem.amount.toString(),
      unit: selectedItem.unit
    });
  };

  mealNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const mealName = e.target.value;
    this.setState({ mealName });
  };

  itemNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const itemName = e.target.value;
    this.setState({ itemName });
  };

  amountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    this.setState({ amount });
  };

  unitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const unit = e.target.value;
    this.setState({ unit });
  };

  findItem = (itemName: string, itemList: string[]) => {
    if (itemList.find(item => item === itemName)) {
      return true;
    }
    return false;
  };

  // checks if item is in the master list of items. If not, the item is added.
  addToItemsAll = (items: ItemState, itemName: string) => {
    if (!this.findItem(itemName, items.itemsAll.map(i => i.name))) {
      this.props.onAddItem(itemName);
    }
  };

  // checks if the item is already in the meal list. If it is, the current item is replaced with the udpated item information.
  addToItems = (itemList: Item[], itemName: string, newItem: Item) => {
    if (this.findItem(itemName, itemList.map(i => i.itemName))) {
      itemList = itemList.filter(item => item.itemName !== itemName);
    }

    this.setState({
      itemName: "",
      amount: "",
      itemList: [...itemList, newItem]
    });
  };

  addItem = () => {
    let { itemName, amount, unit, itemList } = this.state;
    const { items } = this.props;
    let amountToNum = parseFloat(amount);
    const newItem = {
      itemName,
      amount: amountToNum,
      unit
    };

    this.addToItemsAll(items, itemName);
    this.addToItems(itemList, itemName, newItem);
  };

  resetMeal = () => {
    this.setState({ mealName: "", itemList: [] });
  };

  render() {
    return (
      <div className="update">
        <MealForm
          mealNameChange={this.mealNameChange}
          itemNameChange={this.itemNameChange}
          amountChange={this.amountChange}
          unitChange={this.unitChange}
          addItem={this.addItem}
          resetMeal={this.resetMeal}
          mealName={this.state.mealName}
          itemName={this.state.itemName}
          amount={this.state.amount}
          unit={this.state.unit}
          itemList={this.state.itemList}
          mealId={this.props.meal ? this.props.meal.id : ""}
          updateMeal={
            this.props.meal ? this.props.onEditMeal : this.props.onAddMeal
          }
        />
        <MealItems
          mealName={this.state.mealName}
          itemList={this.state.itemList}
          itemToEdit={this.itemToEdit}
          deleteMealItem={this.deleteMealItem}
          isDetails={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState, props: IMealPageProps) => {
  return {
    meals: state.meals,
    items: state.items,
    meal: state.meals.mealList.filter(
      meal => meal.id === props.match.params.mealId
    )[0]
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddItem: (data: string) => dispatch(onAddItem(data)),
    onEditMeal: (data: Meal) => dispatch(onEditMeal(data)),
    onAddMeal: (data: Meal) => dispatch(onAddMeal(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealPage);
