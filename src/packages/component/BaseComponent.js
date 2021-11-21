import {Component} from 'react';

export default class BaseComponent extends Component {

    redirect(uri) {
        const { history } = this.props;
        history.push(uri);
    }
}
