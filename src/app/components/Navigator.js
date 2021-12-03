import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import container from "../config/container";
import {connect} from "react-redux";

class Navigator extends Component {

    componentDidMount() {
        // let tokenEntity = container.security.services.userProvider.getTokenEntity();
        // console.log(tokenEntity.identity);
    }

    render() {
        // console.log(this.props.identity);
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#ui">UI</Nav.Link>
                        <Nav.Link href="#messenger">Messenger</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>

                        {this.props.identity && this.props.identity.username ? (
                            <Nav.Link href="#user/logout">logout ({this.props.identity.username})</Nav.Link>
                        ) : (
                            <Nav.Link href="#user/login">login</Nav.Link>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


const mapStateToProps = (store) => store.securityIdentity;
export default connect(mapStateToProps)(Navigator);