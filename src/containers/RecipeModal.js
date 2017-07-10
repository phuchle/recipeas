import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

const RecipeModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <h4>{props.modalTitle}</h4>
      </Modal.Header>
      <form className="recipe-modal-content">
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter a Title"
          value={props.recipeTitle}
          onChange={props.handleTitleChange}
        />
        <ControlLabel>Ingredients</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter ingredients, separated, by, commas"
          value={props.recipeIngredients}
          onChange={props.handleIngredientsChange}
        />
      <Modal.Footer>
        <Button
          bsStyle="primary"
          onClick={props.handleSubmit}>
          Submit
        </Button>
        <Button onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}

RecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleIngredientsChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default RecipeModal;
