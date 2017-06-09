import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Recipeas</a>
          <ul className="nav navbar-nav">
            <li>
              <a href="https://github.com/phuchle/recipeas">Source Code</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
