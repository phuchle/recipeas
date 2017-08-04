import React from 'react';
import Navigation from './Nav';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const App = (props) => {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
