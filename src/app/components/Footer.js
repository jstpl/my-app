import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <small className="text-muted">
                <hr/>
                {this.props.children}
            </small>
        )
    }
}
