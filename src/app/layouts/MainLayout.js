import React from 'react';
import Navigator from './blocks/Navigator';
import Main from "./blocks/Main";
import Footer from "./blocks/Footer";

import './MainLayout.css';

export default function (props) {
    return (
        <React.Fragment>
            <Navigator/>
            <Main>{props.children}</Main>
            <Footer></Footer>
        </React.Fragment>
    );
}
