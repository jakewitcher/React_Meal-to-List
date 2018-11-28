import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroceryBranch from '../branches/GroceryBranch';
import { addGrocery } from '../actions/grocery';

class GroceryPage extends Component {
    state = {
        listofGroceryLists: true,
        createGroceryList: false,
        editGroceryList: false,
        groceryName: "",
        selectedMeal: this.props.meals.mealList[0] || {},
        itemsMap: new Map(),
        itemsList: [],
    };

    addMealToList = () => {
        const { itemsMap, selectedMeal } = this.state;
        const CombinedItemsList = selectedMeal.itemList.reduce((a, b) => {
            if (a.has(b.itemName)) {
                const newAmount = Number(a.get(b.itemName).amount) + Number(b.amount);
                const itemCopy = Object.assign({}, b)
                itemCopy.amount = newAmount;
                a.set(itemCopy.itemName, itemCopy);
                return a;
            }
            a.set(b.itemName, b);
            return a;
        }, itemsMap);

        const newItemsList = [];
        CombinedItemsList.forEach((i => newItemsList.push(i)));

        this.setState({
            itemsMap: CombinedItemsList,
            itemsList: newItemsList,
            selectedMeal: this.props.meals.mealList[0],
        })
    };

    selectedMealChange = (e) => {
        const { meals } = this.props;
        const selectedMealName = e.target.value;
        const selectedMeal = meals.mealList.filter(meal => meal.name === selectedMealName);
        this.setState({
            selectedMeal: selectedMeal[0],
        });
    };

    groceryNameChange = (e) => {
        const groceryName = e.target.value;
        this.setState({ groceryName });
    };

    resetGrocery = () => {
        this.setState({ groceryName: "", itemsList: [], itemsMap: new Map() });
    }
    render() {
        return (
            <div>

                <GroceryBranch
                    meals={this.props.meals}
                    selectedMeal={this.state.selectedMeal}
                    groceryName={this.state.groceryName}
                    itemsList={this.state.itemsList}
                    selectedMealChange={this.selectedMealChange}
                    groceryNameChange={this.groceryNameChange}
                    addMealToList={this.addMealToList}
                    addGrocery={addGrocery}
                    resetGrocery={this.resetGrocery}
                    groceryLists={this.props.groceryLists.groceryList}
                    listOfGroceryLists={this.state.listOfGroceryLists}
                    createGroceryList={this.state.createGroceryList}
                    editGroceryList={this.state.editGroceryList}
                    dispatch={this.props.dispatch}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groceryLists: state.groceryLists,
        meals: state.meals,
    }
}

export default connect(mapStateToProps)(GroceryPage);