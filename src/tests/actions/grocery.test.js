import { onAddGroceryAsync, onDeleteGroceryAsync, onEditGroceryAsync, onSetGroceryAsync } from '../../actions/grocery';

const items = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'Monday Meals';
const id = '123wasd';

test('should generate add grocery action object', () => {
    const action = onAddGroceryAsync({ name, items });
    expect(action).toEqual({
        type: 'ADD_GROCERY_ASYNC',
        grocery: {
            name,
            items,
        }
    });
});

test('should generate delete grocery action object', () => {
    const action = onDeleteGroceryAsync(id);
    expect(action).toEqual({
        type: 'DELETE_GROCERY_ASYNC',
        id,
    });
});

test('should generate edit grocery action object', () => {
    const action = onEditGroceryAsync({ name, items, id });
    expect(action).toEqual({
        type: 'EDIT_GROCERY_ASYNC',
        grocery: {
            id,
            name,
            items,
        }
    });
});

test('should generate set grocery action object', () => {
    const action = onSetGroceryAsync();
    expect(action).toEqual({
        type: 'SET_GROCERY_ASYNC',
    });
});