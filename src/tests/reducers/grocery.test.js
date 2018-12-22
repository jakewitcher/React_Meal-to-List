import groceryReducer from '../../reducers/grocery';
import { groceryLists, editGroceryItems } from '../fixtures/grocery';

test('should set default state', () => {
    const state = groceryReducer(undefined, { type: '@@INIT' });
    expect(state.groceryList).toEqual([]);
});

test('should add grocery list', () => {
    const grocery = groceryLists[0];
    const action = { type: 'ADD_GROCERY', grocery };
    const state = groceryReducer(undefined, action);
    expect(state.groceryList).toEqual([grocery]);
});

test('should delete grocery list by id', () => {
    const id = 201;
    const action = { type: 'DELETE_GROCERY', id };
    const state = groceryReducer({ groceryList: groceryLists }, action);
    expect(state.groceryList).toEqual([groceryLists[1]]);
});

test('should not delete grocery list if id not found', () => {
    const id = 205;
    const action = { type: 'DELETE_GROCERY', id };
    const state = groceryReducer({ groceryList: groceryLists }, action);
    expect(state.groceryList).toEqual(groceryLists);
});

test('should edit grocery list by id', () => {
    const name = 'Monday Meals';
    const id = 201;
    const groceryEdit = { name, id, items: editGroceryItems };
    const action = { type: 'EDIT_GROCERY', grocery: groceryEdit };
    const state = groceryReducer({ groceryList: groceryLists }, action);
    expect(state.groceryList[0]).toEqual(groceryEdit);
});

test('should not edit grocery list by id', () => {
    const name = 'Monday Meals';
    const id = 205;
    const groceryEdit = { name, id, items: editGroceryItems };
    const action = { type: 'EDIT_GROCERY', grocery: groceryEdit };
    const state = groceryReducer({ groceryList: groceryLists }, action);
    expect(state.groceryList).toEqual(groceryLists);
});

test('should set grocery lists initial state of redux store', () => {
    const lists = groceryLists
    const action = { type: 'SET_GROCERY', lists };
    const state = groceryReducer(undefined, action);
    expect(state.groceryList).toEqual(lists);
});