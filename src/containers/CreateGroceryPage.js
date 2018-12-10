import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateGroceryForm from '../components/grocery/CreateGroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';

class CreateGroceryPage extends Component {
    state = {
        groceryName: "",
        selectedMeal: this.props.meals.mealList[0] || {},
        itemsMap: new Map(),
        itemsList: [],
    };

    groceryToEdit = (id) => {
        const selectedGrocery = this.props.groceryLists.groceryList.filter(list => list.id === id)[0];
        const selectedGroceryMap = new Map();
        selectedGrocery.items.forEach((item) => {
            selectedGroceryMap.set(item.itemName, item);
        });
        this.setState({
            groceryName: selectedGrocery.name,
            itemsMap: selectedGroceryMap,
            itemsList: selectedGrocery.items,
        });
    };

    deleteGroceryItem = (id) => {
        const newGroceryList = this.state.itemsList.filter(item => item.id !== id);
        const newGroceryMap = new Map();
        newGroceryList.forEach((item) => {
            newGroceryMap.set(item.itemName, item);
        });
        this.setState({
            itemsList: newGroceryList,
            itemsMap: newGroceryMap,
        });
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
        });
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
                <div className="grocery">
                    <CreateGroceryForm
                        selectedMeal={this.state.selectedMeal}
                        groceryName={this.state.groceryName}
                        itemsList={this.state.itemsList}
                        selectedMealChange={this.selectedMealChange}
                        groceryNameChange={this.groceryNameChange}
                        addMealToList={this.addMealToList}
                        resetGrocery={this.resetGrocery}
                        meals={this.props.meals}
                    />
                    <GroceryItems
                        groceryName={this.state.groceryName}
                        itemsList={this.state.itemsList}
                    />
                </div>
            </div>

        )
    }

};

const mapStateToProps = (state) => {
    return {
        groceryLists: state.groceryLists,
        meals: state.meals,
    }
}

export default connect(mapStateToProps)(CreateGroceryPage);