import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button } from 'bootstrap-4-react';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <Form>
            <h1>Authorization</h1>
            <Form.Group>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
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
            <Button primary onClick={props.deleteUser.bind(null, this)} type="submit">Submit</Button>
            {/*<h1>{props.user.name} #{props.user.id}</h1>*/}
        </Form>
    );
}
