import { addGrocery, deleteGrocery, editGrocery } from '../../actions/grocery';

const items = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'Monday Meals';
const id = '123wasd';

test('should generate add grocery action object', () => {
    const action = addGrocery({ name, items });
    expect(action).toEqual({
        type: 'ADD_GROCERY',
        grocery: {
            id: expect.any(String),
            name,
            items,
        }
    });
});

test('should generate delete grocery action object', () => {
    const action = deleteGrocery(id);
    expect(action).toEqual({
        type: 'DELETE_GROCERY',
        id,
    });
});

test('should generate edit grocery action object', () => {
    const action = editGrocery({ name, items, id });
    expect(action).toEqual({
        type: 'EDIT_GROCERY',
        grocery: {
            id,
            name,
            items,
        }
    });
});