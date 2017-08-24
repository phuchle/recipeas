import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const NutrientsList = props => {
  return (
    <div>
      {props.nutrients.map(nutr => {
        return (
          <ListGroupItem key={nutr.name}>
            <strong>{nutr.name}: </strong>
            {nutr.value + nutr.unit}
          </ListGroupItem>
        );
      })}
    </div>
  );
};

NutrientsList.propTypes = {
  nutrients: PropTypes.array.isRequired,
};

export default NutrientsList;
