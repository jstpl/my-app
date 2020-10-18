import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
// Layouts
import MainLayout from '../components/layouts/MainLayout';

import UserRoutes from "../pages/user/config/routes";
import SiteRoutes from "../pages/site/config/routes";

export default (
    <HashRouter>
        <MainLayout>
            <Route component={SiteRoutes}/>
            <Route component={UserRoutes}/>
        </MainLayout>
    </HashRouter>
);