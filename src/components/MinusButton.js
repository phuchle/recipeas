import React from 'react';
import { Button } from 'react-bootstrap';

const MinusButton = () => (
  <Button
    bsSize="small"
    bsStyle="danger"
    style={{ marginLeft: '5px' }}
    className="glyphicon glyphicon-minus"
  />
);

export default MinusButton;
