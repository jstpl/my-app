import React from 'react';
import Navigator from '../components/Navigator';
import Breadcrumbs from '../../packages/breadcrumb/web/components/Breadcrumbs';
import Main from "../components/Main";
import Footer from "../components/Footer";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './MainLayout.css';
import '../../packages/adminlte/css/adminlte.min.css';
import {Container} from "react-bootstrap";
import {useLocation} from "react-router";
import breadcrumbFacade from "../../packages/breadcrumb/domain/facades/breadcrumbFacade";

class Effect {

    run() {
        // breadcrumbFacade.addHome();
        // console.log('asda');
    }
}

const effect = new Effect();

export default function (props) {
    const location = useLocation();
    React.useEffect(() => {effect.run()}, [location]);
    return (
        <React.Fragment>

            <ToastContainer/>

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
