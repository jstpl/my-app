import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";

const SiteRoutes = function () {
    return (
        <Switch>
            {/*Route для главной страницы содержит prop exact, благодаря которому пути сравниваются строго.*/}
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    );
};

export default SiteRoutes;
