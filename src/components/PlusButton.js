import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PlusButton = (props) => (
  <Button
    bsSize="small"
    bsStyle="primary"
    style={{ marginLeft: '5px' }}
    className={`${props.className} glyphicon glyphicon-plus`}
  />
);

PlusButton.propTypes = {
  className: PropTypes.string
};

export default PlusButton;
