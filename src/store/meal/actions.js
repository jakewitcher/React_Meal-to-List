export const onAddMeal = ({ name = "", itemList = [] } = {}) => ({
  type: "ON_ADD_MEAL",
  meal: {
    name,
    itemList
  }
});

export const onDeleteMeal = (id = "") => ({
  type: "ON_DELETE_MEAL",
  id
});

export const onEditMeal = ({ name = "", id = "", itemList = [] } = {}) => ({
  type: "ON_EDIT_MEAL",
  meal: {
    id,
    name,
    itemList
  }
});

export const onSetMeal = () => ({
  type: "ON_SET_MEAL"
});
