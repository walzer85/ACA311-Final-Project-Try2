import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from "react-bootstrap";

class NewMusician extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.props = {
      fisrtName: '',
      lastName: '',
      email: '',
      instrument: '',
      genre: '',
      example: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert ('Thank you for your submission!');
  }

  render() {
    return (
      <Form className='New-musician' horizontal>
        <FormGroup controlId="formHorizontalFirstName">
          <Col componentClass={ControlLabel} sm={2}>
            First Name:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="text"
              value={this.props.fisrtName}
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
              value={this.props.lastName}
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
              value={this.props.lastName}
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
              value={this.props.instrument}
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
              value={this.props.genre}
              placeholder="Enter text"
              onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Link to a page of your Band:
          </Col>
          <Col sm={4}>
            <FormControl 
              type="link"
              value={this.props.instrument}
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

export default NewMusician; 