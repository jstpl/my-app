import React, {Component} from 'react';
import {Container} from 'bootstrap-4-react';
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about';
import UserList from '../pages/user-list';
import User from '../pages/user';

export default class Main extends Component {
    render() {
        return (
            <Container as="main" role="main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/users' component={UserList}/>
                    <Route exact path='/users/:userId' component={User}/>
                </Switch>
            </Container>
        )
    }
}
