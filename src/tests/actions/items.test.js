import { addToItemsAll } from '../../actions/items';

test('should generate add item action object', () => {
    const item = { name: 'bacon', id: '123wasd' };
    const action = addToItemsAll({ name: 'bacon', item });
    expect(action).toEqual({
        type: 'ADD_ITEM',
        name: 'bacon',
        item,
    });
});