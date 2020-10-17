import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

// Layouts
import MainLayout from '../components/layouts/main-layout';

import UserRoutes from "../pages/user/config/routes";
import SiteRoutes from "../pages/site/config/routes";

export default (
    <HashRouter>
        <MainLayout/>
        <Route component={MainLayout}>
            <Route component={SiteRoutes}/>
            <Route component={UserRoutes}/>
        </Route>
    </HashRouter>
);