import React, { Component } from "react";
import { Col, Row, Grid, Label, Button, Panel } from "react-bootstrap";
import Center from "./Center";
import ServicePanel from "./ServicePanel";
var exampleOrg = require("./exampleOrg");
var services = require("./services.json");

const Organization = () => {
  const orgInfo = Object.keys(exampleOrg.Details).map(key => {
    return (
      <Row>
        <Col sm={5} smOffset={2}>
          <b>{key}</b>
        </Col>
        <Col sm={5}>
          {exampleOrg.Details[key] ? exampleOrg.Details[key] : null}
        </Col>
      </Row>
    );
  });

  const formatService = service => {
    let capService = service.toLowerCase();
    return capService
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const serviceCategories = Object.keys(services).map(key => {
    //key is Employment
    let orgServices = services[key].map(service => {
      if (exampleOrg.Services[service]) {
        return formatService(service);
      }
    });
    return <ServicePanel title={key} services={orgServices} />;
  });

  return (
    <div>
      <Grid>
        <Center>
          <Button>Edit Information</Button>
        </Center>
        <Col sm={6}>
          <Center>
            <h3>Organization Information</h3>
          </Center>
          {orgInfo}
        </Col>
        <Col sm={4} smOffset={1}>
          <Center>
            <h3>Services Offered</h3>
          </Center>
          {serviceCategories}
        </Col>
      </Grid>
    </div>
  );
};

export default Organization;
