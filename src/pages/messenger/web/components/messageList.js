import React, {Component} from 'react';
import {connect} from "react-redux";
import Query from "../../../../packages/domain/libs/Query";
import container from "../../../../app/config/container";
import MessageForm from "./messageForm";
import MessageItems from "../views/message/messageItems";
import scroll from "../../../../packages/browser/scroll";

class MessageList extends Component {

    updateList() {
        let chatId = this.props.match.params.chatId;
        let query = new Query();
        query.filter.chatId = chatId;
        container.messenger.services.message.all(query).then(() => {
            //this.scrollToBottom();
        });
    }

    componentDidMount() {
        this.updateList();
        this.onUpdate();
    }

    componentDidUpdate(prevProps) {
        let chatId = this.props.match.params.chatId;
        let prevChatId = prevProps.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList();
        }
        this.onUpdate();
    }

    onUpdate() {
        // breadcrumbFacade.add('Dialog', '/');
        scroll.bottom(this.messagesList);
    }

    render() {
        return (
            <div className="data-list">
                <div className="card card-primary direct-chat direct-chat-primary">
                    <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                            <span data-toggle="tooltip" title="3 New Messages" className="badge badge-light">3</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="direct-chat-messages" ref={(el) => {
                            this.messagesList = el;
                        }}>
                            <MessageItems dataProvider={this.props.dataProvider}/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <MessageForm updateList={this.updateList.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => store.messengerMessage;
export default connect(mapStateToProps)(MessageList);
