import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authApi from "../api/authApi";
import {Button, Form} from "bootstrap-4-react";
// import AuthView from "../views/auth";

import { toast } from 'react-toastify';
const notify = () => toast("Wow so easy !");

class Auth extends Component {

    /*componentDidMount() {
        userApi.getUsers();
    }*/

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let state = {};
        state[name] = event.target.value;
        this.setState(state);
    }

    handleSubmit(event) {
        authApi.authorization(this.state);
        //alert('A name was submitted: ' + this.state.login + ' - ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Authorization</h1>
                <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Input value={this.state.login} onChange={this.handleChange} name="login" type="text" id="exampleInputEmail1" placeholder="Enter email" />
                    {/*<Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>*/}
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Input value={this.state.password} onChange={this.handleChange} name="password" type="password" id="exampleInputPassword1" placeholder="Password" />
                </Form.Group>
                {/*<Form.Group>*/}
                {/*    <Form.Check>*/}
                {/*        <Form.CheckInput type="checkbox" id="exampleCheck1" />*/}
                {/*        <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>*/}
                {/*    </Form.Check>*/}
                {/*</Form.Group>*/}
                <Button primary type="submit">Submit</Button>

                <button onClick={notify}>Notify !</button>

            </Form>
            // <AuthView identity={this.props.identity} authorization={}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        identity: store.authState.identity
    };
};

export default connect(mapStateToProps)(Auth);
