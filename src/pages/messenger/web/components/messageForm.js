import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Col, Form, Row} from "react-bootstrap";
import container from "../../../../app/config/container";

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
        let form = {};
        form.message = this.state.message;

        container.messenger.services.message.send(form).then( () => {});
        this.state.message = '';
        // console.log(this.state);
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
                <div className="input-group">
                    <Form.Control
                        value={this.state.message}
                        onChange={this.handleChange}
                        name="message"
                        placeholder="Type Message ..."
                    />
                    <span className="input-group-append">
                        <Button type="submit" onClick={this.handleSubmit}>Send</Button>
                    </span>
                </div>
            </Form>
        );
    }
}

const mapStateToProps = (store) => store.messengerMessage;
export default connect(mapStateToProps)(MessageForm);
