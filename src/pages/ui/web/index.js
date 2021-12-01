import React from 'react';
import {Route, Switch} from "react-router-dom";
// import Profile from "./components/profile";
import ListComponent from "./components/list";
import AlertComponent from "./components/alert";
import ToastrComponent from "./components/toastr";

export default function () {
    return (
        <Switch>
            <Route exact path='/ui' component={ListComponent}/>
            <Route exact path='/ui/alert' component={AlertComponent}/>
            <Route exact path='/ui/toastr' component={ToastrComponent}/>

            {/*<Route exact path='/ui/:id' component={Profile}/>*/}
        </Switch>
    );
};
