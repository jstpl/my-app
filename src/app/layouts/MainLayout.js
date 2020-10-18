import React from 'react';
import Navigator from '../components/Navigator';
import Breadcrumbs from '../components/Breadcrumbs';
import Main from "../components/Main";
import Footer from "../components/Footer";

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
                <Footer>
                    <div className="float-left">Float left</div>
                    <div className="float-right">Float right</div>
                </Footer>
            </Container>

        </React.Fragment>
    );
}
