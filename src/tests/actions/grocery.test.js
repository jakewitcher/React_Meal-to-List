import { onAddGrocery, onDeleteGrocery, onEditGrocery, onSetGrocery } from '../../actions/grocery';

const itemList = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'Monday Meals';
const id = '123wasd';

test('should generate add grocery action object', () => {
    const action = onAddGrocery({ name, itemList });
    expect(action).toEqual({
        type: 'ON_ADD_GROCERY',
        grocery: {
            name,
            itemList,
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
    const action = onEditGrocery({ name, itemList, id });
    expect(action).toEqual({
        type: 'ON_EDIT_GROCERY',
        grocery: {
            id,
            name,
            itemList,
        }
    });
});

test('should generate set grocery action object', () => {
    const action = onSetGrocery();
    expect(action).toEqual({
        type: 'ON_SET_GROCERY',
    });
});