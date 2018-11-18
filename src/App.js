import React, { Component } from 'react';
import FormButtons from './components/FormButtons';
import Header from './components/Header';
import Meal from './components/meal/Meal';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormButtons />
        <Meal />
      </div>
    );
  }
}

export default App;
