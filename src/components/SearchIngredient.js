import React from 'react';
import {
  Grid, Row, Col, InputGroup, FormControl, Button
} from 'react-bootstrap';

const handleIngredientSearch = (event) => {
  event.preventDefault();

  // do some search
}

const SearchIngredient = (props) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} lg={8} lgOffset={2}>
          <h4>Search for an ingredient</h4>
          <form onSubmit={handleIngredientSearch}>
            <InputGroup>
              <FormControl type="text" placeholder="Search" />
              <InputGroup.Button>
                <Button className="btn btn-default glyphicon glyphicon-search" type="submit"></Button>
              </InputGroup.Button>
            </InputGroup>
          </form>

          {/* results go here */}
        </Col>
      </Row>
    </Grid>
  );
}

export default SearchIngredient;
