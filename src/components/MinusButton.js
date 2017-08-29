import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MinusButton = (props) => (
  <Button
    onClick={props.handleClick}
    bsStyle="danger"
    style={{ marginLeft: '5px' }}
    className={`${props.className} glyphicon glyphicon-minus`}
  />
);

MinusButton.propTypes = {
  className: PropTypes.string
};

export default MinusButton;
