import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form} from "react-bootstrap";
import container from "../../../../app/config/container";
import messageList from "./messageList";


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
        container.messenger.services.message.send(form).then( () => {
            this.state.message = '';
            this.setState(this.state);
            this.props.updateList();
        });
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
