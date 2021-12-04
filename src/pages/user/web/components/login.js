import React from 'react';
import {connect} from 'react-redux';
import UnprocessableEntityError from "../../../../packages/contract/errors/UnprocessableEntityError";
import BaseComponent from "../../../../packages/component/BaseComponent";
import {Button, Form, FormGroup} from "react-bootstrap";
import container from "../../../../app/config/container";
import errorHelper from "../../../../packages/rpc/libs/errorHelper";

class Login extends BaseComponent {

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
            await container.auth.services.auth.authByForm(this.state);
            this.redirect('/');
        } catch (error) {
            if (error instanceof UnprocessableEntityError) {
                this.state.errors = errorHelper.unprocessableEntityErrorToAssoc(error);
            }
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Authorization</h1>
                <FormGroup>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control
                        value={this.state.login}
                        onChange={this.handleChange}
                        id="exampleInputEmail1"
                        name="login"
                        placeholder="Enter email"
                    />
                    {/*<Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>*/}
                </FormGroup>
                <FormGroup>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Password"
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Check type="checkbox" id="exampleCheck1" label="Remember me" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            // <AuthView identity={this.props.identity} authorization={}/>
        );
    }
}

export default Login;
