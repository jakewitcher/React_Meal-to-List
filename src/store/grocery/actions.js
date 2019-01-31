export const onAddGrocery = ({
  name = "",
  itemList = [],
  groceryListMeals = {}
} = {}) => ({
  type: "ON_ADD_GROCERY",
  grocery: {
    name,
    itemList,
    groceryListMeals
  }
});

export const onDeleteGrocery = (id = "") => ({
  type: "ON_DELETE_GROCERY",
  id
});

export const onEditGrocery = ({
  name = "",
  id = "",
  itemList = [],
  groceryListMeals = {}
} = {}) => ({
  type: "ON_EDIT_GROCERY",
  grocery: {
    id,
    name,
    itemList,
    groceryListMeals
  }
});

export const onSetGrocery = () => ({
  type: "ON_SET_GROCERY"
});
