import React, {Component} from 'react';
import Fullscreen from "../../../../packages/browser/Fullscreen";
import {Link} from "react-router-dom";
import breadcrumbFacade from "../../../../packages/breadcrumb/domain/facades/breadcrumbFacade";

class Home extends Component {

    fullscreen() {
        let fullscreen = new Fullscreen();
        fullscreen.open();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // breadcrumbFacade.addHome();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.
                </p>
                <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.
                    </p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
                        <button className="btn btn-primary" onClick={this.fullscreen.bind(this)}>Full screen</button>
                    </p>
            </div>
        );
    }
}

export default Home;
