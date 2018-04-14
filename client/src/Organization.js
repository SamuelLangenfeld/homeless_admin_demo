import React, { Component } from "react";
import { Col, Row, Grid, Label, Button, Panel, Alert } from "react-bootstrap";
import Center from "./Center";
import ServicePanel from "./ServicePanel";
var exampleOrg = require("./exampleOrg");
var services = require("./services.json");

class Organization extends Component {
  constructor() {
    super();
    this.state = { isEditing: false, alert: false };
    this.alert = null;
  }

  handleClick = () => {
    this.setState({ isEditing: !this.state.isEditing, alert: false });
  };

  submitChanges = () => {
    this.setState({ isEditing: false, alert: true });
  };

  dismissAlert = () => {
    this.setState({ alert: false });
  };

  render() {
    let alert = this.state.alert ? (
      <Center>
        <Alert
          bsStyle="success"
          onDismiss={this.dismissAlert}
          style={{ display: "inline-block" }}
        >
          <b>Thank you!</b> We will review your submitted changes and update
          your information
        </Alert>
      </Center>
    ) : null;
    let orgInfo;
    this.alert = null;
    let editButton = (
      <Button onClick={this.handleClick}>Edit Information</Button>
    );

    if (this.state.isEditing) {
      orgInfo = Object.keys(exampleOrg.Details).map(key => {
        return (
          <Row>
            <Col sm={6}>
              <b>{key}</b>
            </Col>
            <Col sm={6}>
              <input
                type="text"
                defaultValue={
                  exampleOrg.Details[key] ? exampleOrg.Details[key] : null
                }
              />
            </Col>
          </Row>
        );
      });

      editButton = (
        <div>
          <Button onClick={this.handleClick} style={{ marginRight: "50px" }}>
            Discard Changes
          </Button>
          <Button onClick={this.submitChanges} bsStyle="primary">
            Submit Changes
          </Button>
        </div>
      );
    } else {
      orgInfo = Object.keys(exampleOrg.Details).map(key => {
        return (
          <Row>
            <Col sm={6}>
              <b>{key}</b>
            </Col>
            <Col sm={6}>
              <div>{exampleOrg.Details[key]}</div>
            </Col>
          </Row>
        );
      });
    }

    const formatService = service => {
      let capService = service.toLowerCase();
      return capService
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    let serviceCategories;

    if (!this.state.isEditing) {
      serviceCategories = Object.keys(services).map(key => {
        //key is Employment
        let orgServices = services[key].map(service => {
          if (exampleOrg.Services[service]) {
            return formatService(service);
          }
        });
        return (
          <ServicePanel
            key={"non-edit" + key}
            title={key}
            services={orgServices}
            open={false}
          />
        );
      });
    } else {
      serviceCategories = Object.keys(services).map(key => {
        let offeredServices = [];
        let formattedServices = services[key].map(service => {
          if (exampleOrg.Services[service]) {
            offeredServices.push(formatService(service));
          }
          return formatService(service);
        });

        return (
          <ServicePanel
            key={"edit" + key}
            title={key}
            services={formattedServices}
            offeredServices={offeredServices}
            editing={true}
            open={true}
          />
        );
      });
    }

    let services1 = serviceCategories.slice(0, serviceCategories.length / 2);
    let services2 = serviceCategories.slice(serviceCategories.length / 2);

    return (
      <div>
        <Grid>
          {alert}
          <Center>{editButton}</Center>
          <Col sm={5}>
            <Center>
              <h3 style={{ marginBottom: "30px" }}>Organization Information</h3>
            </Center>
            {orgInfo}
          </Col>
          <Col sm={6} smOffset={1}>
            <Center>
              <h3 style={{ marginBottom: "30px" }}>Services Offered</h3>
            </Center>
            <Col sm={6}>{services1}</Col>
            <Col sm={6}>{services2}</Col>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Organization;
