import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Login from "./Login";
import Organization from "./Organization";
import { Jumbotron, Navbar, Col, Nav } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "some"
    };

    this.login = this.login.bind(this);
  }

  login = () => {
    alert("should be logged in");
    this.setState({ user: "dataKind@dc.org" });
  };

  render() {
    const redirect = this.state.user ? null : <Redirect to="/login" />;
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">DC Homeless Service Provider</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Navbar.Brand>
              <NavLink to="/login">Login</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to="/logout">Logout</NavLink>
            </Navbar.Brand>
          </Nav>
        </Navbar>
        {redirect}
        <Switch>
          <Route
            exact
            path="/login"
            render={props => <Login userLogin={this.login} {...props} />}
          />
          <Route path="/admin" component={Organization} />
        </Switch>
      </div>
    );
  }
}

export default App;
