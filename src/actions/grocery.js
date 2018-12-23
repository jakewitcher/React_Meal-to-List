export const onAddGrocery = (
    {
        name = '',
        itemList = [],
    } = {}
) => ({
    type: 'ON_ADD_GROCERY',
    grocery: {
        name,
        itemList,
    }
});

export const onDeleteGrocery = (id = '') => ({
    type: 'ON_DELETE_GROCERY',
    id,
});

export const onEditGrocery = (
    {
        name = '',
        id = '',
        itemList = [],
    } = {}
) => ({
    type: 'ON_EDIT_GROCERY',
    grocery: {
        id,
        name,
        itemList,
    }
});

export const onSetGrocery = () => ({
    type: 'ON_SET_GROCERY',
});