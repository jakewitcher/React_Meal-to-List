import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroceryForm from '../components/grocery/GroceryForm';
import GroceryItems from '../components/grocery/GroceryItems';
import { onAddGroceryAsync, onEditGroceryAsync } from '../actions/grocery';

export class GroceryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryName: props.grocery ? props.grocery.name : '',
            selectedMeal: props.meals.mealList[0] || {},
            itemsList: props.grocery ? props.grocery.items : [],
        }
    }

    deleteGroceryItem = (name) => {
        const newGroceryList = this.state.itemsList.filter(item => item.itemName !== name);
        this.setState({
            itemsList: newGroceryList,
        });
    };

    addMealToList = () => {
        const { itemsList, selectedMeal } = this.state;
        const listCopy = itemsList.map(i => Object.assign({}, i));

        const combinedItemsList = selectedMeal.itemList.reduce((list, item) => {
            const itemFound = list.find(i => i.itemName === item.itemName)
            if (itemFound) {
                itemFound.amount = Number(item.amount) + Number(itemFound.amount);
                return list;
            }

            list.push(item);
            return list;
        }, listCopy);

        this.setState({
            itemsList: combinedItemsList,
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
        this.setState({ groceryName: "", itemsList: [] });
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
                        updateGrocery={this.props.grocery ? this.props.onEditGroceryAsync : this.props.onAddGroceryAsync}
                    />
                    <GroceryItems
                        groceryName={this.state.groceryName}
                        itemsList={this.state.itemsList}
                        deleteGroceryItem={this.deleteGroceryItem}
                        isDetails={false}
                    />
                </div>
            </div>

        )
    }

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
        onEditGroceryAsync: (data) => dispatch(onEditGroceryAsync(data)),
        onAddGroceryAsync: (data) => dispatch(onAddGroceryAsync(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryPage);