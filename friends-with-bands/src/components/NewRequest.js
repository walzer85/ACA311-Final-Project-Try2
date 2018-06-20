import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from "react-bootstrap";

class NewRequest extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      fisrtName: '',
      lastName: '',
      email: '',
      instrument: '',
      genre: '',
      example: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalFirstName">
          <Col componentClass={ControlLabel} sm={2}>
            First Name:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.state.fisrtName}
              placeholder="Enter text"
              onChange={this.handleChange}  />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalLastName">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.state.lastName}
              placeholder="Enter text"
              onChange={this.handleChange} />
          </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email Address (Will Not Be Displayed):
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.state.lastName}
              placeholder="Enter text"
              onChange={this.handleChange} />
          </Col>
        </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Instrument Desired:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.state.instrument}
              placeholder="Enter text"
              onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Genre:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.state.genre}
              placeholder="Enter text"
              onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Link to a page of you playing:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="link"
              value={this.state.instrument}
              placeholder="URL Here"
              onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Add Me</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default NewRequest; 