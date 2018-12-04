import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateGroceryPage from './CreateGroceryPage';
import GroceryListsPage from './GroceryListsPage';

class GroceryPage extends Component {
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
        const { match } = this.props;
        const groceryProps = {
            meals: this.props.meals,
            selectedMeal: this.state.selectedMeal,
            groceryName: this.state.groceryName,
            itemsList: this.state.itemsList,
            selectedMealChange: this.selectedMealChange,
            groceryNameChange: this.groceryNameChange,
            addMealToList: this.addMealToList,
            deleteGroceryItem: this.deleteGroceryItem,
            resetGrocery: this.resetGrocery,
            groceryLists: this.props.groceryLists.groceryList,
            listOfGroceryLists: this.state.listOfGroceryLists,
            createGroceryList: this.state.createGroceryList,
            editGroceryList: this.state.editGroceryList,
            match: this.props.match,
            dispatch: this.props.dispatch,
        }
        return (
            <Router>
                <div>
                    <GroceryListsPage
                        groceryLists={this.props.groceryLists.groceryList}
                        dispatch={this.props.dispatch}
                        groceryToEdit={this.groceryToEdit}
                        match={this.props.match}
                        groceryProps={groceryProps}
                    />
                    <Link to={`${match.url}/create`}>
                        <button className="form-tabs__button form-tabs__button--meal">Create Grocery List</button>
                    </Link>

                    <Route path={`${match.path}/create`} render={props => <CreateGroceryPage {...props} groceryProps={groceryProps}/>} exact={true}/>
                </div>
            </Router>
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