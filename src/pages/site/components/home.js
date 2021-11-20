import React, {Component} from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

class Home extends Component {

    fullscreen() {
        document.documentElement.requestFullscreen();
    }

    render() {
        return (
            <Jumbotron>
                <Display4>Hello, world</Display4>
                <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <Button primary lg>Learn more</Button>
                &nbsp;
                <button className="btn btn-primary" onClick={this.fullscreen.bind(this)}>Full screen</button>
            </Jumbotron>
        );
    }
}

export default Home;
