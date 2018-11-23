export const addToItemsAll = (
    {
        name = '',
        item = {},
    } = {}
) => ({
    type: 'ADD_ITEM',
    name,
    item,
});