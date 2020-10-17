import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from '../pages/site/components/home';
import About from '../pages/site/components/about';
// Layouts
import MainLayout from '../components/layouts/main-layout';


import UserRoutes from "../pages/user/config/routes";

export default (
    <HashRouter>
        <MainLayout/>
        <Route component={MainLayout}>
            {/*Route для главной страницы содержит prop exact, благодаря которому пути сравниваются строго.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route component={UserRoutes}/>
        </Route>
    </HashRouter>
);