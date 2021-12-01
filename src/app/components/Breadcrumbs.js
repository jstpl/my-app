import React, {Component} from 'react';
import {Breadcrumb} from "react-bootstrap";

export default class Breadcrumbs extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="#/">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#/users">
                    Users
                </Breadcrumb.Item>
                <Breadcrumb.Item active aria-current="page">
                    Data
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
