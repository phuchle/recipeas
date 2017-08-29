import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchResultItem = (props) => {
  return (
    <ListGroupItem>
      <Link to={{
        pathname: '/ingredient-details',
        state: {
          dbNumber: props.dbNumber
        }
      }}>
      {props.name}
      </Link>
    </ListGroupItem>
  );
};

export default SearchResultItem;
