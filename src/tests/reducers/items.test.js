import itemsReducer from '../../reducers/items';
import { itemsList } from '../fixtures/items';

test('should set default state', () => {
    const state = itemsReducer(undefined, { type: '@@INIT' });
    expect(state.itemsAll).toEqual(new Map());
});

test('should add item', () => {
    const item = itemsList.get("bacon");
    const name = "bacon";

    const itemMap = new Map([["bacon", { name: "bacon", id: 1, }]]);

    const action = { type: 'ADD_ITEM', item, name, };
    const state = itemsReducer(undefined, action);
    expect(state.itemsAll).toEqual(itemMap);
});