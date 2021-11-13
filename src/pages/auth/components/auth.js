import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authService} from "../index";
import {Button, Form} from "bootstrap-4-react";
import UnprocessableEntityError from "../../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../../packages/rpc/libs/ErrorHelper";
import BaseComponent from "../../../packages/component/BaseComponent";

class Auth extends BaseComponent {

    /*componentDidMount() {
        userApi.getUsers();
    }*/

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errors: {},
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

    async handleSubmit(event) {
        event.preventDefault();
        try {
            await authService.authByForm(this.state);
            // console.log(token);
            this.redirect('/');
        } catch (error) {
            if (error instanceof UnprocessableEntityError) {
                let errorHelper = new ErrorHelper();
                this.state.errors = errorHelper.unprocessableEntityErrorToAssoc(error);
            }
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Authorization</h1>
                <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Input value={this.state.login} onChange={this.handleChange} name="login" type="text"
                                id="exampleInputEmail1" placeholder="Enter email"/>
                    {/*<Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>*/}
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Input value={this.state.password} onChange={this.handleChange} name="password" type="password"
                                id="exampleInputPassword1" placeholder="Password"/>
                </Form.Group>
                {/*<Form.Group>*/}
                {/*    <Form.Check>*/}
                {/*        <Form.CheckInput type="checkbox" id="exampleCheck1" />*/}
                {/*        <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>*/}
                {/*    </Form.Check>*/}
                {/*</Form.Group>*/}
                <Button primary type="submit">Submit</Button>
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
