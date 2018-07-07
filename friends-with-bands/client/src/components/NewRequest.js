import React, { Component } from "react";
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from "react-bootstrap";

class NewRequest extends Component {
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

  render() {
    return (
      <div className='New-request'>
        <h2>Let Musicians Know What You're Looking For</h2>
        <p>Tell everyone what you want to add to your style.  If you are looking for more than one instrument, separate them with commas.  You can use a brief description for your genre as well as just the name of the genre.</p>
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
              Link to a page of you playing:
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

export default NewRequest; 