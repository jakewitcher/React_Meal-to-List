import React from 'react';
import MealItem from './MealItem'

const MealItems = (props) => {
    const { mealName, itemList, dispatch, deleteMealItem } = props;
    return (
        <div className="itemlist">
            <h1 className="itemlist__header">{ mealName || 'Meal'}</h1>
            {itemList.length > 0 && <ul className="itemlist__body">
                {itemList.map(item => {
                    return (
                        <MealItem 
                            item={item}
                            deleteMealItem={deleteMealItem}
                            dispatch={dispatch}
                            key={item.id}
                        />
                    )
                })}
            </ul>}
        </div>
    );
}

export default MealItems;