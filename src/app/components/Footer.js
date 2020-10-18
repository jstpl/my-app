import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <small className="text-muted">
                {this.props.children}
            </small>
        )
    }
}
