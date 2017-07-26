import React, { Component } from 'react';
import {
  Grid, Row, Col, InputGroup, FormControl, Button
} from 'react-bootstrap';
import { searchIngredient } from '../utils/api';

class SearchIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleIngredientSearch = this.handleIngredientSearch.bind(this);
  }
  handleIngredientSearch(event) {
    event.preventDefault();
    searchIngredient(this.state.query);
  }
  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }
  render() {
    console.log('rendering');
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

            {/* results go here */}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SearchIngredient;
