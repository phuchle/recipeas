import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const EditButton = (props) => (
  <Button
    bsSize="small"
    className="edit-recipe glyphicon glyphicon-pencil"
    onClick={props.handleClick}
  />
);

EditButton.propTypes = {
  handleClick: PropTypes.func,
};

export default EditButton;
