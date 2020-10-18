import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button } from 'bootstrap-4-react';

let form = {
    login: 'hhh',
};

// Using "Stateless Functional Components"
export default function (props) {
    // console.log(props);
    return (
        <Form onSubmit={props.authorization.bind(null, form)}>
            <h1>Authorization</h1>
            {props.identity.name}
            <Form.Group>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Form.Input name="login" type="text" id="exampleInputEmail1" placeholder="Enter email" />
                <Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleInputPassword1">Password</label>
                <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
            </Form.Group>
            <Form.Group>
                <Form.Check>
                    <Form.CheckInput type="checkbox" id="exampleCheck1" />
                    <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
                </Form.Check>
            </Form.Group>
            <Button primary type="submit">Submit</Button>
            {/*<h1>{props.user.name} #{props.user.id}</h1>*/}
        </Form>
    );
}
