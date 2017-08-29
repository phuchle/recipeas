import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PlusButton = (props) => (
  <Button
    bsStyle="primary"
    style={{
      marginLeft: '5px',
      marginBottom: '10px'
   }}
    className={`${props.className} glyphicon glyphicon-plus`}
  />
);

PlusButton.propTypes = {
  className: PropTypes.string
};

export default PlusButton;
