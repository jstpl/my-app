import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Form,
  Button,
  BSpan
} from 'bootstrap-4-react';
import {Link} from 'react-router-dom';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="dark" fixed="top">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto">

            <Nav.Item>
              <Link activeClassName="active" className="nav-link" to="/">Home</Link>
            </Nav.Item>

            <Nav.Item>
              <Link activeClassName="active" className="nav-link" to="/about">About</Link>
            </Nav.Item>

            <Nav.Item activeClassName="active">
              <Link className="nav-link" to="/users">Users</Link>
            </Nav.Item>

            <Nav.Item dropdown>
              <Nav.Link
                dropdownToggle
                href="https://example.com"
                id="dropdown01"
              >
                Dropdown
              </Nav.Link>
              <Dropdown.Menu aria-labelledby="dropdown01">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input mr="sm-2" type="text" placeholder="Search" aria-label="Search" />
            <Button outline success my="2 sm-0" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
