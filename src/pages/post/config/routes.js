import React from 'react';
import {Route, Switch} from "react-router-dom";
import List from "../components/list";
import One from "../components/one";

const PostRoutes = function () {
    return (
        <Switch>
            {/*Route для главной страницы содержит prop exact, благодаря которому пути сравниваются строго.*/}
            <Route exact path='/post' component={List}/>
            <Route exact path='/post/:id' component={One}/>
        </Switch>
    );
};

export default PostRoutes;
