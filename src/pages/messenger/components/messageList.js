import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import Query from "../../../packages/domain/libs/Query";
import {authService} from "../../auth";
import UnprocessableEntityError from "../../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../../packages/rpc/libs/ErrorHelper";
import container from "../../../packages/container/container";
import messenger from "../index";

class MessageList extends Component {

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

    updateList() {
        // let store = container.get('store');
        // console.log(store.getState().chatState.dataProvider);

        let chatId = this.props.match.params.chatId;
        let query = new Query();
        query.filter.chatId = chatId;
        messenger.services.message.all(query).then(function () {});
    }

    componentDidMount() {
        this.updateList();
    }

    componentDidUpdate(prevProps) {
        let chatId = this.props.match.params.chatId;
        let prevChatId = prevProps.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList();
        }
    }

    render() {
        return (
            <MessageListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messageState;
export default connect(mapStateToProps)(MessageList);
