import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, InputGroup} from "bootstrap-4-react/lib/components";

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
        this.state.message = '';
        this.setState(this.state);
        console.log(this.state);
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
                <InputGroup>
                    <Form.Input
                        className="form-control" value={this.state.message} onChange={this.handleChange}
                        name="message" type="text" id="message" placeholder="Type Message ..."/>
                    <span className="input-group-append">
                        <button type="button" className="btn btn-primary">Send</button>
                    </span>
                </InputGroup>
            </Form>
        );
    }
}

const mapStateToProps = (store) => store.messageState;
export default connect(mapStateToProps)(MessageForm);
