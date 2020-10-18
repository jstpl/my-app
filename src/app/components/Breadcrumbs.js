import React, {Component} from 'react';
import {Breadcrumb} from "bootstrap-4-react/lib/components";
import {Link} from "react-router-dom";

export default class Breadcrumbs extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/users">Users</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active aria-current="page">
                    Data
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
