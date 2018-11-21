import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addMeal } from '../../actions/meal';

class MealForm extends Component {
    state = {
        mealName: '',
        itemName: '',
        amount: '',
        unit: '',
        itemList: []
    };

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

    addItem = () => {
        const { itemName, amount, unit, itemList } = this.state;
        const newItem = {
            id: uuid(),
            itemName,
            amount,
            unit,
        };
        this.setState({
            itemName: '',
            amount: '',
            unit: '',
            itemList: [...itemList, newItem]
        });
    }

    render() {
        return (
            <div className="mealform">
                <h2 className="mealform__header">Create a New Meal</h2>
                <div className="mealform__form">
                    <div className="mealform__nameinputfield">
                        <p>Meal Name</p>
                        <input
                            className="mealform__nameinputfield--input"
                            type="text"
                            value={this.state.mealName}
                            onChange={this.mealNameChange}
                        />
                    </div>
                    <div className="mealform__iteminputfields">
                        <div>
                            <p>Item</p>
                            <input
                                className="mealform__iteminputfields--input"
                                type="text"
                                value={this.state.itemName}
                                onChange={this.itemNameChange}
                            />
                        </div>

                        <div>
                            <p>Amount</p>
                            <input
                                className="mealform__iteminputfields--input"
                                type="number"
                                value={this.state.amount}
                                onChange={this.amountChange}
                            />
                        </div>

                        <div>
                            <p>Unit</p>
                            <select
                                className="mealform__iteminputfields--input mealform__iteminputfields--dropdown"
                                name="unit"
                                value={this.state.unit}
                                onChange={this.unitChange}
                            >
                                <option value="pound(s)">pound(s)</option>
                                <option value="ounce(s)">ounce(s)</option>
                                <option value="gallon(s)">gallons</option>
                                <option value="quart(s)">quart(s)</option>
                                <option value="pint(s)">pint(s)</option>
                                <option value="item(s)">item(s)</option>
                                <option value="bag(s)">bag(s)</option>
                                <option value="box(es)">box(es)</option>
                                <option value="container(s)">container(s)</option>
                            </select>
                        </div>
                        <div className="mealform__button">
                            <button
                                className="mealform__button--add"
                                onClick={this.addItem}
                            >
                                Add Item
                            </button>
                        </div>
                    </div>
                    <div>
                        <button 
                            className="mealform__button--save"
                            onClick={() => {
                                const name = this.state.mealName;
                                const itemList = this.state.itemList;
                                this.props.dispatch(addMeal({
                                    name,
                                    itemList
                                }));
                                this.setState({ mealName: '', itemList: [] });
                            }}
                        >
                            Save Meal
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect()(MealForm);