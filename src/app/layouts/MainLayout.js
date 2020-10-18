import React from 'react';
import Navigator from './blocks/Navigator';
import Breadcrumbs from './blocks/Breadcrumbs';
import Main from "./blocks/Main";
import Footer from "./blocks/Footer";

import './MainLayout.css';
import {Container} from "bootstrap-4-react";

export default function (props) {
    return (
        <React.Fragment>
            <Navigator/>

            <Container>
                <Breadcrumbs/>
            </Container>

            <Container as="main" role="main">
                <Main>{props.children}</Main>
            </Container>

            <Container>
                <Footer>footer</Footer>
            </Container>

        </React.Fragment>
    );
}
