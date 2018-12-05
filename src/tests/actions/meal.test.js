import { addMeal, deleteMeal, editMeal } from '../../actions/meal';

const itemList = [{ name: 'bacon', amount: 2, unit: 'pounds' }, { name: 'waffles', amount: 12, unit: 'items' }];
const name = 'breakfast';
const id = '123wasd';

test('should generate new meal action object', () => {
    const action = addMeal({ name, itemList });
    expect(action).toEqual({
        type: 'ADD_MEAL',
        meal: {
            id: expect.any(String),
            name,
            itemList,
        }
    });
});

test('should generate delete meal action object', () => {
    const action = deleteMeal(id);
    expect(action).toEqual({
        type: 'DELETE_MEAL',
        id,
    });
});

test('should generate edit meal action object', () => {
    const action = editMeal({ name, id, itemList });
    expect(action).toEqual({
        type: 'EDIT_MEAL',
        meal: {
            id,
            name,
            itemList,
        }
    });
});