import { onAddMealAsync, onDeleteMealAsync, onEditMealAsync, onSetMealAsync } from '../../actions/meal';

const itemList = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'breakfast';
const id = '123wasd';

test('should generate new meal action object', () => {
    const action = onAddMealAsync({ name, itemList });
    expect(action).toEqual({
        type: 'ADD_MEAL_ASYNC',
        meal: {
            name,
            itemList,
        }
    });
});

test('should generate delete meal action object', () => {
    const action = onDeleteMealAsync(id);
    expect(action).toEqual({
        type: 'DELETE_MEAL_ASYNC',
        id,
    });
});

test('should generate edit meal action object', () => {
    const action = onEditMealAsync({ name, id, itemList });
    expect(action).toEqual({
        type: 'EDIT_MEAL_ASYNC',
        meal: {
            id,
            name,
            itemList,
        }
    });
});

test('shouldl generate set meal action object', () => {
    const action = onSetMealAsync();
    expect(action).toEqual({
        type: 'SET_MEAL_ASYNC'
    });
});