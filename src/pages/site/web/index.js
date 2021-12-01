import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home";

const SiteRoutes = function () {
    return (
        <Switch>
            {/*Route для главной страницы содержит prop exact, благодаря которому пути сравниваются строго.*/}
            <Route exact path='/' component={Home}/>
        </Switch>
    );
};

export default SiteRoutes;
