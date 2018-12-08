import uuid from 'uuid';

export const itemsAllDefaultState = new Map([
    ["bacon", { name: "bacon", id: uuid() }],
    ["eggs", { name: "eggs", id: uuid() }],
    ["toast", { name: "toast", id: uuid() }],
    ["orange juice", { name: "orange juice", id: uuid() }],
    ["salad", { name: "salad", id: uuid() }],
    ["chicken", { name: "chicken", id: uuid() }],
    ["walnuts", { name: "walnuts", id: uuid() }],
    ["apples", { name: "apples", id: uuid() }],
    ["pasta", { name: "pasta", id: uuid() }],
    ["marinara sauce", { name: "marinara sauce", id: uuid() }],
    ["breadsticks", { name: "breadsticks", id: uuid() }],
]);

const getItemId = (item) => {
    return itemsAllDefaultState.get(item).id;
};

const breakfast = [
    { amount: 2, itemName: "bacon", unit: "pound(s)", id: getItemId("bacon") },
    { amount: 12, itemName: "eggs", unit: "item(s)", id: getItemId("eggs") },
    { amount: 1, itemName: "toast", unit: "bag(s)", id: getItemId("toast") },
    { amount: 1, itemName: "orange juice", unit: "quart(s)", id: getItemId("orange juice") },
];

const lunch = [
    { amount: 1, itemName: "salad", unit: "bag(s)", id: getItemId("salad") },
    { amount: 2, itemName: "chicken", unit: "pound(s)", id: getItemId("chicken") },
    { amount: 12, itemName: "walnuts", unit: "ounce(s)", id: getItemId("walnuts") },
    { amount: 4, itemName: "apples", unit: "item(s)", id: getItemId("apples") },
    { amount: 1, itemName: "bacon", unit: "pound(s)", id: getItemId("bacon") },
];

const dinner = [
    { amount: 1, itemName: "pasta", unit: "box(es)", id: getItemId("pasta") },
    { amount: 2, itemName: "marinara sauce", unit: "pint(s)", id: getItemId("marinara sauce") },
    { amount: 12, itemName: "breadsticks", unit: "item(s)", id: getItemId("breadsticks") },
    { amount: 1, itemName: "salad", unit: "bag(s)", id: getItemId("salad") },
];

export const mealDefaultState = [
    { name: "breakfast", itemList: breakfast, id: uuid() },
    { name: "lunch", itemList: lunch, id: uuid() },
    { name: "dinner", itemList: dinner, id: uuid() }
];

const MondayMealItems = [
    { amount: 1, itemName: "salad", unit: "bag(s)", id: getItemId("salad") },
    { amount: 2, itemName: "chicken", unit: "pound(s)", id: getItemId("chicken") },
    { amount: 12, itemName: "walnuts", unit: "ounce(s)", id: getItemId("walnuts") },
    { amount: 4, itemName: "apples", unit: "item(s)", id: getItemId("apples") },
    { amount: 2, itemName: "bacon", unit: "pound(s)", id: getItemId("bacon") },
    { amount: 12, itemName: "eggs", unit: "item(s)", id: getItemId("eggs") },
    { amount: 1, itemName: "toast", unit: "bag(s)", id: getItemId("toast") },
    { amount: 1, itemName: "orange juice", unit: "quart(s)", id: getItemId("orange juice") },
];

const TuesdayMealItems = [
    { amount: 2, itemName: "salad", unit: "bag(s)", id: getItemId("salad") },
    { amount: 2, itemName: "chicken", unit: "pound(s)", id: getItemId("chicken") },
    { amount: 12, itemName: "walnuts", unit: "ounce(s)", id: getItemId("walnuts") },
    { amount: 4, itemName: "apples", unit: "item(s)", id: getItemId("apples") },
    { amount: 1, itemName: "bacon", unit: "pound(s)", id: getItemId("bacon") },
    { amount: 1, itemName: "pasta", unit: "box(es)", id: getItemId("pasta") },
    { amount: 2, itemName: "marinara sauce", unit: "pint(s)", id: getItemId("marinara sauce") },
    { amount: 12, itemName: "breadsticks", unit: "item(s)", id: getItemId("breadsticks") },
]

export const groceryDefaultState = [
    { name: "Monday Meals", id: uuid(), items: MondayMealItems },
    { name: "Tuesday Meals", id: uuid(), items: TuesdayMealItems },
];