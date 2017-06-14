import React, { Component } from 'react';
import Navigation from './Nav';
import RecipesList from '../containers/RecipesList';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <RecipesList />
      </div>
    );
  }
}

export default App;
