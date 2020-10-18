import React, {Component} from 'react';
import {Breadcrumb} from "bootstrap-4-react/lib/components";

export default class Main extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
