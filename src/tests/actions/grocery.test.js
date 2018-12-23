import { onAddGrocery, onDeleteGrocery, onEditGrocery, onSetGrocery } from '../../actions/grocery';

const items = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'Monday Meals';
const id = '123wasd';

test('should generate add grocery action object', () => {
    const action = onAddGrocery({ name, items });
    expect(action).toEqual({
        type: 'ON_ADD_GROCERY',
        grocery: {
            name,
            items,
        }
    });
});

test('should generate delete grocery action object', () => {
    const action = onDeleteGrocery(id);
    expect(action).toEqual({
        type: 'ON_DELETE_GROCERY',
        id,
    });
});

test('should generate edit grocery action object', () => {
    const action = onEditGrocery({ name, items, id });
    expect(action).toEqual({
        type: 'ON_EDIT_GROCERY',
        grocery: {
            id,
            name,
            items,
        }
    });
});

test('should generate set grocery action object', () => {
    const action = onSetGrocery();
    expect(action).toEqual({
        type: 'ON_SET_GROCERY',
    });
});