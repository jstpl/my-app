import React from 'react';
import {Route, BrowserRouter, HashRouter} from 'react-router-dom';
import Home from '../pages/site/components/home';
import About from '../pages/site/components/about';

// Layouts
import MainLayout from '../components/layouts/main-layout';
import SearchLayoutContainer from '../components/containers/search-layout-container';


import UserRoutes from "../pages/user/config/routes";

import UserListContainer from "../components/containers/user-list-container";
import UserProfileContainer from "../components/containers/user-profile-container";

export default (
    <HashRouter>
        <MainLayout/>
        <Route component={MainLayout}>
            {/*Route для главной страницы содержит prop exact, благодаря которому пути сравниваются строго.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route path='/users' component={UserRoutes} />
        </Route>
    </HashRouter>
);