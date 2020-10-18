import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
// Layouts
import MainLayout from './layouts/MainLayout';

import UserModule from "../pages/user/module";
import AuthModule from "../pages/auth/module";
import PostModule from "../pages/post/module";
import SiteModule from "../pages/site/module";

export default (
    <HashRouter>
        <MainLayout>
            <Route exact path="/" component={SiteModule}/>
            <Route path="/post" component={PostModule}/>
            <Route path="/users" component={UserModule}/>
            <Route component={AuthModule}/>
        </MainLayout>
    </HashRouter>
);