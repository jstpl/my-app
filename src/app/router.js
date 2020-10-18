import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
// Layouts
import MainLayout from './layouts/MainLayout';

import UserRoutes from "../pages/user/module";
import PostRoutes from "../pages/post/module";
import SiteRoutes from "../pages/site/module";

export default (
    <HashRouter>
        <MainLayout>
            <Route exact path="/" component={SiteRoutes}/>
            <Route path="/post" component={PostRoutes}/>
            <Route path="/users" component={UserRoutes}/>
        </MainLayout>
    </HashRouter>
);