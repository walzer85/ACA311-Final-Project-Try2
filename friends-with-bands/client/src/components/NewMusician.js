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
      <div className='New-musician'>
        <h2>Let People Know You're Looking For A Band</h2>
        <p>Tell everyone a little about yourself.  If you play more than one instrument, separate them with commas.  The same applies to genre.</p>
        <Form horizontal>
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
              Instrument(s):
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
              Genre(s):
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
            <Col smOffset={0} sm={3}>
              <Button type="submit">Add Me</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default NewMusician; 