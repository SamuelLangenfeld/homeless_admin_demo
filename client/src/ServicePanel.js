import React from "react";
import { Panel } from "react-bootstrap";
import ReactDOM from "react-dom";

class ServicePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    let services;
    if (!this.props.editing) {
      services = this.props.services.map(service => <div>{service}</div>);
    } else {
      services = this.props.services.map(service => {
        let checkbox = this.props.offeredServices.find(
          offeredService => offeredService === service
        ) ? (
          <input type="checkbox" defaultChecked />
        ) : (
          <input type="checkbox" />
        );
        return (
          <div>
            {checkbox}
            <label>{service}</label>
          </div>
        );
      });
    }

    return (
      <div onClick={this.handleClick}>
        <Panel toggle expanded>
          <Panel.Heading>
            <Panel.Title toggle>
              <div>{this.props.title}</div>
            </Panel.Title>
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
