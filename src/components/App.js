import React from 'react';
import Navigation from './Nav';
import RecipesList from '../containers/RecipesList';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  return (
    <div className="App">
      <Navigation />
      <RecipesList />
    </div>
  );
}

export default App;
