import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const NutrientsList = ({ nutrients }) => {
  const nutrientKeys = Object.keys(nutrients);
  return (
    <div>
      {nutrientKeys.map(key => {
        return (
          <ListGroupItem key={nutrients[key].id}>
            <strong>{nutrients[key].name}: </strong>
            {nutrients[key].value + nutrients[key].unit}
          </ListGroupItem>
        );
      })}
    </div>
  );
};

NutrientsList.propTypes = {
  nutrients: PropTypes.object.isRequired,
};

export default NutrientsList;
