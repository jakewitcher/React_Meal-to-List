export const onAddItemAsync = (name = '') => ({
    type: 'ADD_ITEM_ASYNC',
    name,
});

export const onSetItemAsync = () => ({
    type: 'SET_ITEM_ASYNC',
});