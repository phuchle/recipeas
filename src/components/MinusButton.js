import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MinusButton = (props) => (
  <Button
    bsStyle="danger"
    style={{ marginLeft: '5px' }}
    className={`${props.className} glyphicon glyphicon-minus`}
  />
);

MinusButton.propTypes = {
  className: PropTypes.string
};

export default MinusButton;
