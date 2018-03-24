import React from "react";
import { Panel } from "react-bootstrap";

class ServicePanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }

  render() {
    const services = this.props.services.map(service => <div>{service}</div>);

    return (
      <div>
        <Panel toggle>
          <Panel.Heading>
            <Panel.Title toggle>{this.props.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>{services}</Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default ServicePanel;
