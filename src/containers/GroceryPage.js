import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';
import { addGrocery, editGrocery } from '../actions/grocery';

class GroceryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryName: props.grocery ? props.grocery.name : '',
            selectedMeal: this.props.meals.mealList[0] || {},
            itemsMap: props.grocery ? groceryMap(props.grocery) : new Map(),
            itemsList: props.grocery ? props.grocery.items : [],
        }
    }

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
                    <GroceryForm
                        selectedMeal={this.state.selectedMeal}
                        groceryName={this.state.groceryName}
                        itemsList={this.state.itemsList}
                        selectedMealChange={this.selectedMealChange}
                        groceryNameChange={this.groceryNameChange}
                        addMealToList={this.addMealToList}
                        resetGrocery={this.resetGrocery}
                        meals={this.props.meals}
                        groceryId={this.props.grocery ? this.props.grocery.id : ''}
                        title={this.props.grocery ? 'Edit Grocery List' : 'Create Grocery List'}
                        updateGrocery={this.props.grocery ? this.props.editGrocery : this.props.addGrocery}
                    />
                    <GroceryItems
                        groceryName={this.state.groceryName}
                        itemsList={this.state.itemsList}
                        deleteGroceryItem={this.deleteGroceryItem}
                    />
                </div>
            </div>

        )
    }

};

const groceryMap = (grocery) => {
    const selectedGroceryMap = new Map();
    grocery.items.forEach((item) => {
        selectedGroceryMap.set(item.itemName, item);
    });
    return selectedGroceryMap;
};

const mapStateToProps = (state, props) => {
    return {
        groceryLists: state.groceryLists,
        meals: state.meals,
        grocery: state.groceryLists.groceryList.filter((list) => list.id === props.match.params.groceryId)[0],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editGrocery: (data) => dispatch(editGrocery(data)),
        addGrocery: (data) => dispatch(addGrocery(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryPage);