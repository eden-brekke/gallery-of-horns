import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './Dropdown.css'

class Dropdown extends React.Component {
  render() {
    return (
      <Container className="form-container">
        <Form style={{ width: 'max-content', margin: 'auto' }}>
          <Form.Group controlId='selected'>
            <Form.Label className="form-label">How many Horns would you like to see?</Form.Label>
            <Form.Select className="form-select" onChange={this.props.handleSelect}>
              <option className="none"> -- -- -- </option>
              <option className="opOne" value='one'>1</option>
              <option className="opTwo"value='two'>2</option>
              <option className="opThree"value='three'>3</option>
              <option className="opOneHundred"value='oneHundred'>100</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Dropdown; 