import React, {Component} from 'react';
import {Route, BrowserRouter, HashRouter, IndexRoute} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import UserList from './pages/user-list';
import UserProfile from './pages/user-profile';

// Layouts
import MainLayout from './components/layouts/main-layout';
// import SearchLayoutContainer from "../docs/teach/guide-3-redux/app/components/containers/search-layout-container";
// import UserListContainer from "./components/containers/user-list-container";
// import UserProfileContainer from "./components/containers/user-profile-container";
// import SearchLayoutContainer from './components/containers/search-layout-container';

export default (
    <HashRouter>
        <MainLayout/>
        <Route component={MainLayout}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/users111' component={UserList}/>
            <Route exact path='/users111/:id' component={UserProfile}/>



        </Route>
    </HashRouter>
);