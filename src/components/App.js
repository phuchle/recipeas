import React from 'react';
import Navigation from './Nav';
import Main from './Main';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
