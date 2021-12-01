import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Col, Form, Row} from "react-bootstrap";

// import {Button, Form, InputGroup, FormControl, Col} from "react-bootstrap";

class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
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
        // console.log(this);
        // console.log(this.state);
        this.state.message = '';
        this.setState(this.state);
        /*try {
            await authService.authByForm(this.state);
            // console.log(token);
            this.redirect('/');
        } catch (error) {
            if (error instanceof UnprocessableEntityError) {
                let errorHelper = new ErrorHelper();
                this.state.errors = errorHelper.unprocessableEntityErrorToAssoc(error);
            }
        }*/
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row className="align-items-center">
                    <Col md={10}>
                        <Form.Control
                            value={this.state.message}
                            onChange={this.handleChange}
                            name="message"
                            placeholder="Type Message ..."
                        />
                    </Col>
                    <Col md={2}>
                        <Button type="submit" onClick={this.handleSubmit}>Send</Button>
                    </Col>
                </Row>
            </Form>
            /*<Form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Form.Input
                        className="form-control" value={this.state.message} onChange={this.handleChange}
                        name="message" type="text" id="message" placeholder="Type Message ..."/>
                    <span className="input-group-append">
                        <button type="button" className="btn btn-primary">Send</button>
                    </span>
                </InputGroup>
            </Form>*/
        );
    }
}

const mapStateToProps = (store) => store.messengerMessage;
export default connect(mapStateToProps)(MessageForm);
