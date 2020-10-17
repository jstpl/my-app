import React, {Component} from 'react';
import {Container} from 'bootstrap-4-react';
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import UserList from './pages/user-list';
import UserProfile from './pages/user-profile';

import App from './App';
import { default as MainLayout } from './components/Main';

export default (
    <HashRouter>
        <App/>
        <Route component={MainLayout}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/users/:id' component={UserProfile}/>
        </Route>
    </HashRouter>
);