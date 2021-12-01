import React from 'react';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/AdminLteLayout';
// import MainLayout from './layouts/AdminLteLayout';

// import UserModule from "../../pages/user/module";
import AuthModule from "../../pages/auth/web";
import SiteModule from "../../pages/site/module";
import UiModule from "../../pages/ui/module";
import MessengerModule from "../../pages/messenger/web";

export default (
    <BrowserRouter>
        <HashRouter>
            <MainLayout>
                <Route exact path="/" component={SiteModule}/>
                {/*<Route path="/users" component={UserModule}/>*/}
                <Route component={AuthModule}/>
                <Route component={UiModule}/>
                <Route path="/messenger" component={MessengerModule}/>
            </MainLayout>
        </HashRouter>
    </BrowserRouter>
);
