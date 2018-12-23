export const onAddGrocery = (
    {
        name = '',
        items = [],
    } = {}
) => ({
    type: 'ON_ADD_GROCERY',
    grocery: {
        name,
        items,
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
        items = [],
    } = {}
) => ({
    type: 'ON_EDIT_GROCERY',
    grocery: {
        id,
        name,
        items,
    }
});

export const onSetGrocery = () => ({
    type: 'ON_SET_GROCERY',
});