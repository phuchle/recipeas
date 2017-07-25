import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <p className="navbar-brand">Recipeas</p>
        </Link>
        <ul className="nav navbar-nav">
          <li>
            <a href="https://github.com/phuchle/recipeas">Source Code</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
