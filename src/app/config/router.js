import React from 'react';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/AdminLteLayout';
// import MainLayout from './layouts/AdminLteLayout';

// import UserModule from "../../pages/user/module";
import UserModule from "../../pages/user/web";
import SiteModule from "../../pages/site/web";
import UiModule from "../../pages/ui/web";
import MessengerModule from "../../pages/messenger/web";

export default (
    <BrowserRouter>
        <HashRouter>
            <MainLayout>
                <Route exact path="/" component={SiteModule}/>
                {/*<Route path="/users" component={UserModule}/>*/}
                <Route path="/user" component={UserModule}/>
                <Route component={UiModule}/>
                <Route path="/messenger" component={MessengerModule}/>
            </MainLayout>
        </HashRouter>
    </BrowserRouter>
);
