import { onAddItemAsync, onSetItemAsync } from '../../actions/items';

test('should generate add item action object', () => {
    const name = 'bacon';
    const action = onAddItemAsync(name);
    expect(action).toEqual({
        type: 'ADD_ITEM_ASYNC',
        name,
    });
});

test('should generate set action object', () => {
    const action = onSetItemAsync();
    expect(action).toEqual({
        type: 'SET_ITEM_ASYNC',
    });
});