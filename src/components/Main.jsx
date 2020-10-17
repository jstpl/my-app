import React, {Component} from 'react';
import {Container} from 'bootstrap-4-react';
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/site/components/home';
import About from '../pages/site/components/about';
import UserList from '../pages/user/components/user-list';
import UserProfile from '../pages/user/components/user-profile';

export default class Main extends Component {
    render() {
        return (
            <Container as="main" role="main">
                {this.props.children}
            </Container>
        )
    }
}
