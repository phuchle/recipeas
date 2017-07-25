import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <Navbar fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Recipeas
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <a href="https://github.com/phuchle/recipeas">
            Source Code
          </a>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
