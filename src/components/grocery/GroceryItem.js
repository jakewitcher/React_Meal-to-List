import React from 'react';

const GroceryItem = () =>  {
    return (
        <li className="itemlist__item">
        <div className="item">
          <p>name</p>
        </div>
        <div className="item">
          <p>amount</p>
        </div>
        <div className="item">
          <p>unit</p>
        </div>
      </li>
    )
}

export default GroceryItem;