import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid';
import CreateMealPage from './CreateMealPage';
import MealListsPage from './MealListsPage';
import { addToItemsAll } from '../actions/items';

class MealPage extends Component {
    state = {
        mealName: '',
        itemName: '',
        amount: '',
        unit: 'pound(s)',
        itemList: [],
    };

    // sets the name and itemList of the selected meal in state so that it can be edited.
    // delete items from the meal item list.

    mealToEdit = (id) => {
        const selectedMeal = this.props.meals.mealList.filter(meal => meal.id === id)[0];
        this.setState({
            mealName: selectedMeal.name,
            itemList: selectedMeal.itemList,
        });
    };

    deleteMealItem = (id) => {
        const newMealList = this.state.itemList.filter(item => item.id !== id);
        this.setState({
            itemList: newMealList,
        });
    };

    itemToEdit = (id) => {
        const selectedItem = this.state.itemList.filter(item => item.id === id)[0];
        this.setState({
            itemName: selectedItem.itemName,
            amount: selectedItem.amount,
            unit: selectedItem.unit,
        })
    }

    // on Change event listeners for setting the information for a new item or setting the name of the meal.
    // this includes the item name, amount, and unit of the item.

    mealNameChange = (e) => {
        const mealName = e.target.value;
        this.setState({ mealName });
    };

    itemNameChange = (e) => {
        const itemName = e.target.value;
        this.setState({ itemName });
    };

    amountChange = (e) => {
        const amount = e.target.value;
        this.setState({ amount });
    };

    unitChange = (e) => {
        const unit = e.target.value;
        this.setState({ unit });
    };

    // all items are stored in a master list. createItemId checks to see if an item for a new meal already exists in the list.
    // if it does, this function ensures that duplicate items have the same id across all meal lists.

    createItemId = (itemName, itemMap) => {
        if (itemMap.has(itemName)) {
            return itemMap.get(itemName).id;
        } else {
            return uuid();
        }
    }

    // when a new item is added to a meal, these functions check to see if the item is already on the list.
    // if not, it adds the item to the list. if it does exist, it sums the amounts. 
    // once editing is in place, this will change and there will be a message that lets you know the item already exists
    // and asks if you would like to edit it.

    findItemAndReplace = (itemName, amount, unit, list) => {
        let newList = list.map(item => {
            if (item.itemName === itemName) {
                item.amount = amount;
                item.unit = unit;
                return item;
            }
            return item;
        });
        return newList;
    }

    checkListForItem = (name, list) => {
        return list.filter(item => item.itemName === name).length > 0;
    }

    addItem = () => {
        const { itemName, amount, unit, itemList } = this.state;
        if (this.checkListForItem(itemName, itemList)) {
            const newList = this.findItemAndReplace(itemName, amount, unit, itemList);
            this.setState({
                itemName: '',
                amount: '',
                unit: 'pound(s)',
                itemList: newList,
            });
            return;
        }
        const { items, dispatch } = this.props;
        const id = this.createItemId(itemName, items.itemsAll);

        const newItem = {
            id,
            itemName,
            amount,
            unit,
        };

        dispatch(addToItemsAll({
            name: itemName,
            item: {
                name: itemName,
                id: id,
            }
        }));

        this.setState({
            itemName: '',
            amount: '',
            unit: 'pound(s)',
            itemList: [...itemList, newItem]
        });
    }

    // resets the mealName and itemList after a new meal was created and saved.

    resetMeal = () => {
        this.setState({ mealName: '', itemList: [] });
    }

    render() {
        const { match } = this.props;
        const mealProps = {
            mealName: this.state.mealName,
            itemName: this.state.itemName,
            amount: this.state.amount,
            unit: this.state.unit,
            itemList: this.state.itemList,
            mealNameChange: this.mealNameChange,
            itemNameChange: this.itemNameChange,
            amountChange: this.amountChange,
            unitChange: this.unitChange,
            addItem: this.addItem,
            resetMeal: this.resetMeal,
            itemToEdit: this.itemToEdit,
            deleteMealItem: this.deleteMealItem,
            dispatch: this.props.dispatch,
        }
 
        return (
            <Router>
                <div>
                    <MealListsPage
                        createNewMeal={this.createNewMeal}
                        meals={this.props.meals.mealList}
                        dispatch={this.props.dispatch}
                        mealToEdit={this.mealToEdit}
                        match={this.props.match}
                        mealProps={mealProps}
                    />
                    <Link to="/meals/create">
                        <button className="form-tabs__button form-tabs__button--meal">Create Meal</button>
                    </Link>

                    <Route path={`${match.path}/create`} render={props => <CreateMealPage {...props} mealProps={mealProps}/>} exact={true}/>
                </div>
            </Router>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meals: state.meals,
        items: state.items,
    }
}

export default connect(mapStateToProps)(MealPage);