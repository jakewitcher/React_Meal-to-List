import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditGroceryPage from './EditGroceryPage';
import Grocery from '../components/grocery/Grocery';

const GroceriesList = (props) => {
    const { groceryLists, dispatch, match, groceryToEdit, groceryProps } = props;
    return (
        <Router>
            <div>
                {
                    groceryLists.map(list => {
                        return <Grocery
                            name={list.name}
                            id={list.id}
                            dispatch={dispatch}
                            groceryToEdit={groceryToEdit}
                            key={list.id}
                        />
                    })
                }
            
                <Route path={`${match.path}/edit/:groceryId`} render={props => <EditGroceryPage {...props} groceryProps={groceryProps}/>} exact={true}/>
            </div>
        </Router>
    );
}

export default GroceriesList;