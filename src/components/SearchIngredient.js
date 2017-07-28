import React, { Component } from 'react';
import {
  Grid, Row, Col, InputGroup, FormControl, Button, ListGroup
} from 'react-bootstrap';
import { searchFoodDescription } from '../utils/api';
import SearchResultItem from './SearchResultItem';

class SearchIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleIngredientSearch = this.handleIngredientSearch.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }
  renderSearchResults(foodArray) {
    const resultsList = foodArray.map((foodObj) => {
      return (
        <SearchResultItem
          dbNumber={foodObj.ndbno}
          key={foodObj.ndbno}
          name={foodObj.name}
        />
      );
    });

    this.setState({
      searchResults: resultsList
    });
  }
  handleIngredientSearch(event) {
    event.preventDefault();
    searchFoodDescription(this.state.query)
    .then(results => this.renderSearchResults(results));
  }
  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} lg={8} lgOffset={2}>
            <h4>Search for an ingredient</h4>
            <form onSubmit={this.handleIngredientSearch}>
              <InputGroup>
                <FormControl
                  value={this.state.query}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Search"
                />
                <InputGroup.Button>
                  <Button className="btn btn-default glyphicon glyphicon-search" type="submit" />
                </InputGroup.Button>
              </InputGroup>
            </form>

            <ListGroup>
              {this.state.searchResults}
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SearchIngredient;
