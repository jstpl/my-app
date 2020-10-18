import React from 'react';
import {Link, Switch} from 'react-router-dom';

// import {Main, Navigator} from '../../components';
import Navigator from '../../components/Navigator';
import Main from '../../components/Main';

import './main-layout.css';
import {Container} from "bootstrap-4-react";

export default function (props) {
    return (
        <div className="app">
            <header className="primary-header"></header>
            <Navigator/>
            <Container as="main" role="main">
                <main>
                    ssssss
                    {props.children}
                </main>
            </Container>

        </div>

        /*<React.Fragment>
<Navigator/>



        </React.Fragment>*/
    );
}
