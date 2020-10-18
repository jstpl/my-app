import React, {Component} from 'react';
import {Container} from 'bootstrap-4-react';

export default class Main extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
