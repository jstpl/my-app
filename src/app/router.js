import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

// Layouts
import MainLayout from '../components/layouts/main-layout';

import UserRoutes from "../pages/user/config/routes";
import SiteRoutes from "../pages/site/config/routes";

import Main from "../components/Main"
import {Container} from "bootstrap-4-react";

export default (
    <HashRouter>
        <MainLayout>
                <Route component={SiteRoutes}/>
                <Route component={UserRoutes}/>
        </MainLayout>
    </HashRouter>
);