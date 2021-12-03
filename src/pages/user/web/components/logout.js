import React from 'react';
import BaseComponent from "../../../../packages/component/BaseComponent";
import container from "../../../../app/config/container";

class Logout extends BaseComponent {

    componentDidMount() {
        container.auth.services.auth.logout();
        this.redirect('/');
    }

    render() {
        return (
            <></>
        );
    }
}

export default Logout;
