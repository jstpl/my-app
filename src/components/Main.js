import React, {Component} from 'react';
import {Container} from 'bootstrap-4-react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Container as="main" role="main">
                    {this.props.children}
                </Container>
            </div>
        )
    }
}
