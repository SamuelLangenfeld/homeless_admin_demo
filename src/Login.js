import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
  Button,
  Checkbox,
  Jumbotron
} from "react-bootstrap";
var admin = require("./admin.json");

const Login = props => {
  const onSubmit = e => {
    e.preventDefault();
    if (
      e.target.email.value === admin.email &&
      e.target.password.value === admin.password
    ) {
      console.log(props);
      props.userLogin();
      props.history.push(`/admin/${admin.id}`);
    }
  };

  return (
    <Col sm={4} smOffset={4}>
      <Jumbotron>
        <p style={{ textAlign: "center" }}>
          DC Homeless Service Provider Admin Page
        </p>
      </Jumbotron>
      <Form horizontal onSubmit={onSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" name="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default Login;
